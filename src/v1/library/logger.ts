import chalk from 'chalk';

export default class Logger {
	public static log(args: any) {
		this.info(args);
	}

	public static info(args: any) {
		console.log(chalk.blue(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args));
	}

	public static warn(args: any) {
		console.log(chalk.yellowBright(chalk.yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? chalk.yellowBright(args) : args));
	}

	public static error(args: any) {
		console.log(chalk.red(chalk.red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? chalk.red(args) : args));
	}
}