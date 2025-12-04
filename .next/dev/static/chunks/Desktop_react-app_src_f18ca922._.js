(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/react-app/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogApi",
    ()=>blogApi,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = 'https://xyjjtcldwluxpanwbmte.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5amp0Y2xkd2x1eHBhbndibXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTEwNTUsImV4cCI6MjA4MDI2NzA1NX0.aNVI4Tw65QmeNxYdtN9bPTq3EUXe4czBR-VI6qpGR_w';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const blogApi = {
    // Получить все посты (можно фильтровать по тегу)
    async getPosts (tag) {
        let query = supabase.from('posts').select('*').order('created_at', {
            ascending: false
        });
        // Если передан тег - фильтруем
        if (tag) {
            query = query.contains('tags', [
                tag
            ]);
        }
        const { data, error } = await query;
        if (error) {
            console.error('Error:', error);
            return [];
        }
        return data;
    },
    // Создать пост с тегами
    async createPost (title, content, author_name, tags = []) {
        const { data, error } = await supabase.from('posts').insert([
            {
                title,
                content,
                author_name: author_name || 'Аноним',
                likes_count: 0,
                tags: tags
            }
        ]).select().single();
        if (error) {
            console.error('Error:', error);
            return null;
        }
        return data;
    },
    // Лайк поста
    async likePost (postId) {
        const { data: post } = await supabase.from('posts').select('likes_count').eq('id', postId).single();
        if (!post) return null;
        const { data, error } = await supabase.from('posts').update({
            likes_count: (post.likes_count || 0) + 1
        }).eq('id', postId).select();
        if (error) {
            console.error('Error:', error);
            return null;
        }
        return data[0];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/react-app/src/lib/supabase2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userService",
    ()=>userService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/supabase.ts [app-client] (ecmascript)");
;
const userService = {
    // Получить всех пользователей
    async getUsers () {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching users:', error);
                return [];
            }
            return data;
        } catch (err) {
            console.error('Unexpected error:', err);
            return [];
        }
    },
    // Создать нового пользователя
    async createUser (name, email) {
        try {
            // Проверяем, есть ли уже такой email
            const { data: existingUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('email', email).single();
            if (existingUser) {
                alert('Пользователь с таким email уже существует!');
                return null;
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').insert([
                {
                    name: name.trim(),
                    email: email.trim()
                }
            ]).select().single();
            if (error) {
                console.error('Error creating user:', error);
                alert('Ошибка при создании пользователя');
                return null;
            }
            return data;
        } catch (err) {
            console.error('Unexpected error:', err);
            return null;
        }
    },
    // Удалить пользователя
    async deleteUser (id) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', id);
            if (error) {
                console.error('Error deleting user:', error);
                return false;
            }
            return true;
        } catch (err) {
            console.error('Unexpected error:', err);
            return false;
        }
    },
    // Войти (проверить существование пользователя)
    async login (email) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('email', email.trim()).single();
            if (error) {
                console.error('Error logging in:', error);
                return null;
            }
            return data;
        } catch (err) {
            console.error('Unexpected error:', err);
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/react-app/src/lib/auth-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
const authService = {
    setCurrentUser (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },
    getCurrentUser () {
        try {
            const userStr = localStorage.getItem('currentUser');
            if (!userStr) return null;
            return JSON.parse(userStr);
        } catch  {
            return null;
        }
    },
    logout () {
        localStorage.removeItem('currentUser');
    },
    isAuthenticated () {
        return !!this.getCurrentUser();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/react-app/src/app/styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backLinkStyle",
    ()=>backLinkStyle,
    "dashboardLinkStyle",
    ()=>dashboardLinkStyle,
    "dataContainerStyle",
    ()=>dataContainerStyle,
    "deleteButtonStyle",
    ()=>deleteButtonStyle,
    "existingUsersStyle",
    ()=>existingUsersStyle,
    "formContainerStyle",
    ()=>formContainerStyle,
    "formStyle",
    ()=>formStyle,
    "inputGroupStyle",
    ()=>inputGroupStyle,
    "inputStyle",
    ()=>inputStyle,
    "linksContainerStyle",
    ()=>linksContainerStyle,
    "primaryLinkStyle",
    ()=>primaryLinkStyle,
    "redirectInfoStyle",
    ()=>redirectInfoStyle,
    "spinnerStyle",
    ()=>spinnerStyle,
    "submitButtonStyle",
    ()=>submitButtonStyle,
    "successCardStyle",
    ()=>successCardStyle,
    "successContainerStyle",
    ()=>successContainerStyle,
    "successSubTextStyle",
    ()=>successSubTextStyle,
    "successTextStyle",
    ()=>successTextStyle,
    "successTitleStyle",
    ()=>successTitleStyle,
    "userCardStyle",
    ()=>userCardStyle,
    "userInfoStyle",
    ()=>userInfoStyle,
    "usersListStyle",
    ()=>usersListStyle
]);
const successContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '20px'
};
const successCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '50px 40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    border: '3px solid rgba(8, 87, 47, 0.3)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%'
};
const successTitleStyle = {
    color: '#08572f',
    fontSize: '28px',
    marginBottom: '20px'
};
const successTextStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px'
};
const successSubTextStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
    lineHeight: '1.5'
};
const redirectInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
    padding: '15px',
    background: '#e8f5e8',
    borderRadius: '10px',
    border: '1px solid #28a745'
};
const spinnerStyle = {
    fontSize: '24px',
    animation: 'spin 1s linear infinite'
};
const linksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center'
};
const primaryLinkStyle = {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#08572f',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '280px'
};
const backLinkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '180px',
    marginTop: '10px'
};
const dashboardLinkStyle = {
    display: 'inline-block',
    padding: '12px 25px',
    backgroundColor: '#08572f',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginTop: '10px'
};
const formContainerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    border: '2px solid rgba(8, 87, 47, 0.2)'
};
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
};
const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column'
};
const inputStyle = {
    padding: '15px',
    border: '2px solid rgba(8, 87, 47, 0.3)',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease'
};
const submitButtonStyle = {
    padding: '15px',
    backgroundColor: '#08572f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
};
const existingUsersStyle = {
    marginTop: '25px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid #dee2e6'
};
const dataContainerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px'
};
const usersListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
};
const userCardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(8, 87, 47, 0.2)',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};
const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
};
const deleteButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.3s ease'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/react-app/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/supabase2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/auth-service.ts [app-client] (ecmascript)");
// Импортируем стили
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/app/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Данные формы
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Данные для входа
    const [loginEmail, setLoginEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Состояния
    const [isRegistered, setIsRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registeredUser, setRegisteredUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Проверяем авторизацию при загрузке
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            checkAuth();
            loadUsers();
        }
    }["Home.useEffect"], []);
    const checkAuth = async ()=>{
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].getCurrentUser();
        setCurrentUser(user);
    };
    const loadUsers = async ()=>{
        setIsLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].getUsers();
            setUsers(data);
        } catch (error) {
            console.error('Ошибка загрузки пользователей:', error);
        }
        setIsLoading(false);
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        // Валидация
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert('Заполните все поля');
            return;
        }
        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }
        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов');
            return;
        }
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].register(name, email, password);
        if (newUser) {
            setRegisteredUser(newUser.name);
            setIsRegistered(true);
            setCurrentUser(newUser);
            resetForm();
            loadUsers();
            setTimeout(()=>{
                router.push('/dashboard');
            }, 2000);
        }
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        if (!loginEmail.trim() || !loginPassword.trim()) {
            alert('Введите email и пароль');
            return;
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].login(loginEmail, loginPassword);
        if (user) {
            setRegisteredUser(user.name);
            setIsRegistered(true);
            setCurrentUser(user);
            setLoginEmail('');
            setLoginPassword('');
            setTimeout(()=>{
                router.push('/dashboard');
            }, 1000);
        }
    };
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].logout();
        setCurrentUser(null);
        setRegisteredUser('');
        setIsRegistered(false);
        alert('Вы вышли из системы');
    };
    const handleDeleteUser = async (id)=>{
        if (confirm('Удалить пользователя?')) {
            const success = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].deleteUser(id);
            if (success) {
                loadUsers();
            }
        }
    };
    const resetForm = ()=>{
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setLoginEmail('');
        setLoginPassword('');
    };
    // Если пользователь авторизован
    if (isRegistered) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header"
                }, void 0, false, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successContainerStyle"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successCardStyle"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successTitleStyle"],
                                    children: [
                                        "🎉 Добро пожаловать, ",
                                        registeredUser,
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successTextStyle"],
                                    children: [
                                        "Вы успешно ",
                                        showLogin ? 'вошли в систему' : 'зарегистрированы',
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successSubTextStyle"],
                                    children: "Перенаправление через 2 секунды..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirectInfoStyle"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinnerStyle"],
                                            children: "⏳"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Перенаправление..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linksContainerStyle"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryLinkStyle"],
                                            children: "📊 Личный кабинет"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blog",
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryLinkStyle"],
                                                backgroundColor: '#4a6fa5',
                                                marginTop: '10px'
                                            },
                                            children: "📝 Блог сообщества"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backLinkStyle"],
                                                background: '#dc3545',
                                                border: 'none',
                                                cursor: 'pointer',
                                                marginTop: '10px'
                                            },
                                            children: "Выйти из системы"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "footer",
                    children: [
                        showLogin ? 'Вход выполнен' : 'Регистрация',
                        " завершена успешно"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header"
            }, void 0, false, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main",
                children: [
                    currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '500px',
                            margin: '0 auto 30px',
                            padding: '20px',
                            background: '#e8f5e8',
                            borderRadius: '10px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Вы вошли как: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: currentUser.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '10px',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        style: {
                                            padding: '8px 16px',
                                            background: '#08572f',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '5px'
                                        },
                                        children: "Личный кабинет"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        style: {
                                            padding: '8px 16px',
                                            background: '#dc3545',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer'
                                        },
                                        children: "Выйти"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formContainerStyle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f',
                                    marginBottom: '20px'
                                },
                                children: showLogin ? 'Вход в систему' : 'Регистрация'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            showLogin ? // Форма входа
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleLogin,
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email",
                                            value: loginEmail,
                                            onChange: (e)=>setLoginEmail(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Пароль",
                                                    value: loginPassword,
                                                    onChange: (e)=>setLoginPassword(e.target.value),
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    style: {
                                                        position: 'absolute',
                                                        right: '10px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: '#666'
                                                    },
                                                    children: showPassword ? '🙈' : '👁️'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitButtonStyle"],
                                        children: "🔐 Войти"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            marginTop: '15px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowLogin(false),
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                color: '#08572f',
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            },
                                            children: "Нет аккаунта? Зарегистрироваться"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this) : // Форма регистрации
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleRegister,
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Имя",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Пароль (минимум 6 символов)",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    style: {
                                                        position: 'absolute',
                                                        right: '10px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: '#666'
                                                    },
                                                    children: showPassword ? '🙈' : '👁️'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showPassword ? "text" : "password",
                                            placeholder: "Подтвердите пароль",
                                            value: confirmPassword,
                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitButtonStyle"],
                                        children: "📝 Зарегистрироваться"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            marginTop: '15px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowLogin(true),
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                color: '#08572f',
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            },
                                            children: "Уже есть аккаунт? Войти"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["existingUsersStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Быстрый доступ:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardLinkStyle"],
                                                    backgroundColor: '#4a6fa5'
                                                },
                                                children: "📝 Блог сообщества"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 15
                                            }, this),
                                            currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboard",
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardLinkStyle"],
                                                children: "🎉 Личный кабинет"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataContainerStyle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f',
                                    marginBottom: '20px'
                                },
                                children: [
                                    "Пользователи системы (",
                                    users.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f'
                                },
                                children: "Загрузка..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f'
                                },
                                children: "Нет пользователей"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersListStyle"],
                                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userCardStyle"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userInfoStyle"],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: '#08572f'
                                                        },
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#0b311f',
                                                            fontSize: '14px'
                                                        },
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        style: {
                                                            color: '#666',
                                                            fontSize: '12px'
                                                        },
                                                        children: new Date(user.created_at).toLocaleDateString('ru-RU')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteUser(user.id),
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteButtonStyle"],
                                                disabled: currentUser?.id === user.id,
                                                title: currentUser?.id === user.id ? "Нельзя удалить себя" : "",
                                                children: "Удалить"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '500px',
                            margin: '40px auto',
                            padding: '20px',
                            background: 'rgba(8, 87, 47, 0.1)',
                            borderRadius: '10px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#08572f'
                                },
                                children: "🔐 Безопасная система"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Используется безопасное хранение паролей через Supabase Auth"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    textAlign: 'left',
                                    display: 'inline-block',
                                    margin: '10px 0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Хэширование паролей"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "JWT токены"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Сессии"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Валидация данных"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: "Система регистрации с паролями • Supabase Auth"
            }, void 0, false, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "Y0Vl/v4Us/xEm065SJnssirEIGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_react-app_src_f18ca922._.js.map