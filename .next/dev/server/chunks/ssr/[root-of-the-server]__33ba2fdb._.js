module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/react-app/src/app/hooks/useSQLite.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSQLite",
    ()=>useSQLite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const useSQLite = ()=>{
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Загрузка данных из localStorage при инициализации
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadFromStorage = ()=>{
            try {
                const stored = localStorage.getItem('sqlite_users');
                if (stored) {
                    setUsers(JSON.parse(stored));
                } else {
                    // Начальные данные
                    const initialUsers = [
                        {
                            id: 1,
                            name: 'Иван Иванов',
                            email: 'ivan@example.com'
                        },
                        {
                            id: 2,
                            name: 'Мария Сидорова',
                            email: 'maria@example.com'
                        }
                    ];
                    setUsers(initialUsers);
                    localStorage.setItem('sqlite_users', JSON.stringify(initialUsers));
                }
            } catch (error) {
                console.error('Error loading users:', error);
            } finally{
                setIsLoading(false);
            }
        };
        loadFromStorage();
    }, []);
    // Сохранение в localStorage
    const saveToStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newUsers)=>{
        try {
            localStorage.setItem('sqlite_users', JSON.stringify(newUsers));
        } catch (error) {
            console.error('Error saving users:', error);
        }
    }, []);
    // Добавление пользователя
    const addUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name, email)=>{
        const newUser = {
            id: Date.now(),
            name,
            email
        };
        const newUsers = [
            ...users,
            newUser
        ];
        setUsers(newUsers);
        saveToStorage(newUsers);
    }, [
        users,
        saveToStorage
    ]);
    // Удаление пользователя
    const deleteUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const newUsers = users.filter((user)=>user.id !== id);
        setUsers(newUsers);
        saveToStorage(newUsers);
    }, [
        users,
        saveToStorage
    ]);
    return {
        users,
        isLoading,
        addUser,
        deleteUser
    };
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/react-app/src/app/styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/react-app/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$hooks$2f$useSQLite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/app/hooks/useSQLite.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Импортируем стили из отдельного файла
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/app/styles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const { users, isLoading, addUser, deleteUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$hooks$2f$useSQLite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSQLite"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRegistered, setIsRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registeredUser, setRegisteredUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name.trim() && email.trim()) {
            addUser(name, email);
            setRegisteredUser(name);
            setIsRegistered(true);
            setName('');
            setEmail('');
            // Автоматическое перенаправление через 2 секунды
            setTimeout(()=>{
                router.push('/dashboard');
            }, 2000);
        }
    };
    // Если пользователь зарегистрирован, показываем сообщение и автоматически перенаправляем
    if (isRegistered) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header"
                }, void 0, false, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["successContainerStyle"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["successCardStyle"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["successTitleStyle"],
                                    children: "🎉 Регистрация успешна!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["successTextStyle"],
                                    children: [
                                        "Добро пожаловать, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: registeredUser
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 35
                                        }, this),
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["successSubTextStyle"],
                                    children: "Вы будете автоматически перенаправлены в личный кабинет через 2 секунды..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirectInfoStyle"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spinnerStyle"],
                                            children: "⏳"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Перенаправление..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linksContainerStyle"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryLinkStyle"],
                                            children: "📊 Перейти сейчас в личный кабинет"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backLinkStyle"],
                                            children: "Выйти"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "footer",
                    children: "Регистрация завершена успешно"
                }, void 0, false, {
                    fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    // Обычная форма регистрации
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header"
            }, void 0, false, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formContainerStyle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f',
                                    marginBottom: '20px'
                                },
                                children: "Регистрация нового пользователя"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Введите ваше имя",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputGroupStyle"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Введите ваш email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputStyle"],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitButtonStyle"],
                                        children: "📝 Зарегистрироваться"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["existingUsersStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Уже зарегистрированы?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardLinkStyle"],
                                        children: "🎉 Перейти в личный кабинет"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataContainerStyle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f',
                                    marginBottom: '20px'
                                },
                                children: [
                                    "Пользователи в базе данных (",
                                    users.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f'
                                },
                                children: "Загрузка данных..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: 'center',
                                    color: '#08572f'
                                },
                                children: "Нет пользователей в базе данных"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersListStyle"],
                                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userCardStyle"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userInfoStyle"],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: '#08572f'
                                                        },
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#0b311f',
                                                            fontSize: '14px'
                                                        },
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteUser(user.id),
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$app$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteButtonStyle"],
                                                children: "Удалить"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: "Система регистрации пользователей"
            }, void 0, false, {
                fileName: "[project]/Desktop/react-app/src/app/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33ba2fdb._.js.map