import React from 'react'

const Login = ({email,setEmail,password,setPassword,handlelogin,handlesignup,hasaccount,setHasAccount}) => {
	console.log(email);
	console.log(password);
	return (
    <div class="">
	<div
		class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-[10%]">
		<form class="space-y-6" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" 
				autofocus required value={email} onChange={(e => setEmail(e.target.value))}/>
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					required value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
				<div>
					{hasaccount ? (
						<div>
						<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handlelogin}>Sign In</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" onClick={() => setHasAccount(!hasaccount)}>Sign 
								Up</a>
						</div>
						</div>
					) : (
						<div>
						<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handlesignup}>Sign Up</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" onClick={() => setHasAccount(!hasaccount)}>Sign 
								In</a>
						</div>
						</div>
					)}
						
						</div>
		</form>
	</div>
</div>
  )
}

export default Login