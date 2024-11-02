const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 模拟用户数据
const users = [
    { username: 'xlw', password: '123456' }
];

// 根路由
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 登录接口
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', { username, password }); // 添加日志输出
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('Login successful'); // 添加日志输出
        res.status(200).json({ message: '登录成功' });
    } else {
        console.log('Login failed'); // 添加日志输出
        res.status(401).json({ message: '用户名或密码错误' });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});