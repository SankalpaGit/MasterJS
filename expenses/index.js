#!/usr/bin/env node

const fs = require('fs');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const dataFile = 'data.json';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Load user data from file
function loadUserData() {
  if (fs.existsSync(dataFile)) {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
  }
  return {};
}

// Save user data to file
function saveUserData(users) {
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
}

// Promisify readline.question
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Register a new user
async function registerUser() {
  const email = await question('Enter your email: ');
  const password = await question('Enter your password: ');
  const budgetStr = await question('Enter your budget: ');

  const budget = parseFloat(budgetStr);
  if (isNaN(budget)) {
    console.log('Please enter a valid number for budget.');
    return await registerUser();
  }

  const users = loadUserData();
  if (users[email]) {
    console.log('User already exists. Please login.');
    return await loginUser();
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  users[email] = {
    password: hashedPassword,
    budget: budget,
    expenses: [],
    income: [],
  };

  saveUserData(users);
  console.log('Registration successful!');
  return email;
}

// Login a user
async function loginUser() {
  const email = await question('Enter your email: ');
  const password = await question('Enter your password: ');

  const users = loadUserData();
  if (!users[email] || !bcrypt.compareSync(password, users[email].password)) {
    console.log('Invalid email or password. Please try again.');
    return await loginUser();
  }

  console.log('Login successful!');
  return email;
}

// Log an expense or income
async function logEntry(userEmail, type) {
  const description = await question('Enter the description: ');
  const amountStr = await question('Enter the amount: ');
  const category = await question('Enter the category (personal, professional, other): ');

  const amount = parseFloat(amountStr);
  if (isNaN(amount)) {
    console.log('Please enter a valid number for amount.');
    return await logEntry(userEmail, type);
  }

  const users = loadUserData();
  users[userEmail][type].push({
    description: description,
    amount: amount,
    category: category,
    date: new Date().toISOString(),
  });

  saveUserData(users);
  console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} logged successfully!`);
}

// Generate a report
// Generate a detailed report
async function generateReport(userEmail) {
    const users = loadUserData();
    const user = users[userEmail];
  
    // Group expenses and income by category
    const expenseCategories = user.expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = { total: 0, details: [] };
      }
      acc[expense.category].total += expense.amount;
      acc[expense.category].details.push({
        description: expense.description,
        amount: expense.amount.toFixed(2),
        date: expense.date
      });
      return acc;
    }, {});
  
    const incomeCategories = user.income.reduce((acc, income) => {
      if (!acc[income.category]) {
        acc[income.category] = { total: 0, details: [] };
      }
      acc[income.category].total += income.amount;
      acc[income.category].details.push({
        description: income.description,
        amount: income.amount.toFixed(2),
        date: income.date
      });
      return acc;
    }, {});
  
    // Generate report content
    const reportContent = `
      Budget: $${user.budget.toFixed(2)}
  
      Expenses:
      ${Object.entries(expenseCategories).map(([category, { total, details }]) => `
        ${category}:
        ${details.map(detail => `        - ${detail.description}: $${detail.amount} on ${detail.date}`).join('\n')}
        Total: $${total.toFixed(2)}
      `).join('\n')}
  
      Income:
      ${Object.entries(incomeCategories).map(([category, { total, details }]) => `
        ${category}:
        ${details.map(detail => `        - ${detail.description}: $${detail.amount} on ${detail.date}`).join('\n')}
        Total: $${total.toFixed(2)}
      `).join('\n')}
  
      Total Expenses: $${Object.values(expenseCategories).reduce((acc, { total }) => acc + total, 0).toFixed(2)}
      Total Income: $${Object.values(incomeCategories).reduce((acc, { total }) => acc + total, 0).toFixed(2)}
      Amount Left: $${(user.budget - Object.values(expenseCategories).reduce((acc, { total }) => acc + total, 0)).toFixed(2)}
    `;
  
    fs.writeFileSync('report.txt', reportContent.trim());
    console.log('Report generated successfully! Check report.txt for details.');
  }
  

// Main menu
async function mainMenu(userEmail) {
  const action = await question(
    'What would you like to do?\n' +
    '1. Log an expense\n' +
    '2. Log an income\n' +
    '3. Generate expense report\n' +
    '4. Exit\n' +
    'Enter the number of your choice: '
  );

  switch (action) {
    case '1':
      await logEntry(userEmail, 'expenses');
      break;
    case '2':
      await logEntry(userEmail, 'income');
      break;
    case '3':
      await generateReport(userEmail);
      break;
    case '4':
      console.log('Goodbye!');
      rl.close();
      process.exit(0);
  }

  await mainMenu(userEmail);
}

// Start the program
async function start() {
  console.log('Welcome to the Expense Tracker!');

  const users = loadUserData();
  const userEmails = Object.keys(users);

  let userEmail;
  if (userEmails.length > 0) {
    const action = await question(
      'Do you want to login or register?\n' +
      '1. Login\n' +
      '2. Register\n' +
      'Enter the number of your choice: '
    );

    userEmail = action === '1' ? await loginUser() : await registerUser();
  } else {
    userEmail = await registerUser();
  }

  await mainMenu(userEmail);
}

start();
