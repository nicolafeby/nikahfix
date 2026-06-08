import { useState } from 'react';
import './App.css';
import UserWatch from './components/section/user-watch';
import Thumbnail from './components/section/thumbnail';
import { ConfigProvider } from './context/ConfigContext';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <ConfigProvider>
      <div className="bg-black text-white min-h-screen">
        <div className="max-w-sm container">
          {isLogin ? (
            <Thumbnail />
          ) : (
            <UserWatch
              onClick={() => {
                setIsLogin(true);
              }}
            />
          )}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
