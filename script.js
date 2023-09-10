function fibonacci(num) {
// your code here
	if(n==0) return 0
	if(n==1) return 1
	return fibonacci(num-1)+fibonacci(num-2)
}

module.exports = fibonacci;
