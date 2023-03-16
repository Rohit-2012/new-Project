import {useState} from 'react'
export function Component3(){
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <div>
        <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
        <form>
          
          {isLogin ?(<>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />
  
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
            </>):(<>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />
  
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
              <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
  
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
            </>)}
  
          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
        </form>
  
        <span >
          {isLogin ? "Need an account?" : "Already have an account?"}
        </span><span onClick={toggleForm} style={{cursor:'pointer', textDecoration:'underline'}}>{isLogin?'Sign up' : 'Log in'}</span>
      </div>
    );
  }
