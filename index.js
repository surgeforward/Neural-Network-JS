#!/usr/bin/env node

"use strict";

// This is the CLI entry point

var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var _ = require('lodash');
var touch = require('touch');
var fs = require('fs');
var files = require('./lib/files');

// Variables
var _numInputParameters; //int
var _numHiddenLayers; // int
var _hiddenNeurons; // List<int>
var _numOutputParameters; // int
var _network; // class Network
var _dataSets; // List<DataSet>

clear();

const greet = () => {
    console.log(chalk.yellow(figlet.textSync('JS Neural Network Manager', { horizontalLayout: 'full' })));
    console.log(chalk.blue('Created by Trent Sartain (trentsartain on GitHub)'));  
    console.log("_".repeat(50))  
    console.log('\n')
}
greet();

function createMainMenuQuestions(callback) {  
    inquirer.prompt(
    [
        {
            type: 'list',
            name: 'main',
            message: 'Select if you want a new network or to import a network:',
            choices: [
                'New Network', 
                'Import Network', 
                'Exit'
            ],
            default: [
                'New Network'
            ]
        }
    ]
    ).then(function( answers ) {
        if (answers.main === 'New Network') {
            console.log(chalk.green('New Network!'));
        }
        else if (answers.main === 'Import Network') {
            console.log(chalk.green('Import Network!'));
        }
        // else Exit
        else {
            console.log(chalk.green('Exited!'));
            process.exit();
        }
        return callback();
    }
    );
    
}
createMainMenuQuestions(() => {});