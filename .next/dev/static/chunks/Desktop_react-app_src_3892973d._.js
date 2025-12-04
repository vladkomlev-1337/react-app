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
    // Создать пост с тегами (теперь без параметра author_name)
    async createPost (title, content, tags = [], authorName) {
        const { data, error } = await supabase.from('posts').insert([
            {
                title,
                content,
                author_name: authorName || 'Гость',
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
"[project]/Desktop/react-app/src/lib/user-name-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userNameService",
    ()=>userNameService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/supabase.ts [app-client] (ecmascript)");
;
const userNameService = {
    // Получить имя текущего авторизованного пользователя
    async getCurrentUserName () {
        try {
            // Проверяем, есть ли активная сессия Supabase
            const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (sessionError || !session) {
                console.log('Нет активной сессии, используем гостевой режим');
                return this.getGuestName();
            }
            // Получаем данные пользователя из auth
            const user = session.user;
            // Проверяем, есть ли пользователь в таблице users
            const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('name').eq('id', user.id).single();
            if (!userError && userData) {
                return userData.name;
            }
            // Если нет в таблице users, пробуем получить из user_metadata
            if (user.user_metadata && user.user_metadata.name) {
                return user.user_metadata.name;
            }
            // Если нет в user_metadata, используем часть email
            if (user.email) {
                return user.email.split('@')[0];
            }
            // Если ничего не найдено
            return this.getGuestName();
        } catch (error) {
            console.error('Ошибка получения имени пользователя:', error);
            return this.getGuestName();
        }
    },
    // Получить гостевое имя (если пользователь не авторизован)
    getGuestName () {
        if ("TURBOPACK compile-time truthy", 1) {
            // Проверяем, есть ли сохраненное гостевое имя
            const savedName = localStorage.getItem('blog_guest_name');
            if (savedName) {
                return savedName;
            }
            // Генерируем новое гостевое имя
            const newName = this.generateGuestName();
            localStorage.setItem('blog_guest_name', newName);
            return newName;
        }
        //TURBOPACK unreachable
        ;
    },
    // Сгенерировать случайное гостевое имя
    generateGuestName () {
        const adjectives = [
            'Веселый',
            'Серьезный',
            'Любопытный',
            'Творческий',
            'Умный',
            'Добрый',
            'Странный',
            'Отважный',
            'Спокойный',
            'Энергичный'
        ];
        const nouns = [
            'Читатель',
            'Писатель',
            'Путешественник',
            'Мыслитель',
            'Исследователь',
            'Наблюдатель',
            'Мечтатель',
            'Критик',
            'Фантазер',
            'Советчик'
        ];
        const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomNum = Math.floor(Math.random() * 1000);
        return `${randomAdj} ${randomNoun} ${randomNum}`;
    },
    // Изменить гостевой режим (только для неавторизованных)
    changeGuestName (newName) {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('blog_guest_name', newName.trim());
        }
    },
    // Проверить, авторизован ли пользователь
    async isAuthenticated () {
        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
        return !!session;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/react-app/src/app/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$user$2d$name$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/src/lib/user-name-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/react-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BlogPage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        content: '',
        tagInput: '' // Убрали поле author
    });
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTag, setSearchTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentUserName, setCurrentUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showNameModal, setShowNameModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customName, setCustomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Инициализация при загрузке
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPage.useEffect": ()=>{
            loadPosts();
            initUserName();
        }
    }["BlogPage.useEffect"], []);
    // Загружаем посты
    const loadPosts = async (tag)=>{
        setLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogApi"].getPosts(tag);
            setPosts(data);
        } catch (error) {
            console.error('Ошибка:', error);
        }
        setLoading(false);
    };
    // Инициализируем имя пользователя
    const initUserName = ()=>{
        const userName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$user$2d$name$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userNameService"].getOrCreateUserName();
        setCurrentUserName(userName);
    };
    // Добавить тег
    const addTag = ()=>{
        const tag = newPost.tagInput.trim().toLowerCase();
        if (tag && !tags.includes(tag)) {
            setTags([
                ...tags,
                tag
            ]);
            setNewPost({
                ...newPost,
                tagInput: ''
            });
        }
    };
    // Удалить тег
    const removeTag = (tagToRemove)=>{
        setTags(tags.filter((tag)=>tag !== tagToRemove));
    };
    // Создать пост
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!newPost.title.trim() || !newPost.content.trim()) {
            alert('Заполните заголовок и содержание');
            return;
        }
        setSubmitting(true);
        try {
            const createdPost = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogApi"].createPost(newPost.title, newPost.content, tags, currentUserName // Передаем автоматически определенное имя
            );
            if (createdPost) {
                setPosts([
                    createdPost,
                    ...posts
                ]);
                setNewPost({
                    title: '',
                    content: '',
                    tagInput: ''
                });
                setTags([]);
                alert('Пост создан!');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось создать пост');
        }
        setSubmitting(false);
    };
    // Поиск по тегу
    const handleTagSearch = (tag)=>{
        setSearchTag(tag);
        loadPosts(tag);
    };
    // Сбросить поиск
    const clearSearch = ()=>{
        setSearchTag('');
        loadPosts();
    };
    // Лайк поста
    const handleLike = async (postId)=>{
        try {
            const updatedPost = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogApi"].likePost(postId);
            if (updatedPost) {
                setPosts(posts.map((post)=>post.id === postId ? {
                        ...post,
                        likes_count: updatedPost.likes_count
                    } : post));
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };
    // Форматирование даты
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    // Изменить имя
    const handleChangeName = ()=>{
        setCustomName(currentUserName);
        setShowNameModal(true);
    };
    // Сохранить новое имя
    const saveNewName = ()=>{
        if (customName.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$user$2d$name$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userNameService"].saveUserName(customName.trim());
            setCurrentUserName(customName.trim());
            setShowNameModal(false);
        }
    };
    // Сбросить на случайное имя
    const resetToRandomName = ()=>{
        const newName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$src$2f$lib$2f$user$2d$name$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userNameService"].resetUserName();
        setCurrentUserName(newName);
        setShowNameModal(false);
    };
    // Модалка для смены имени
    const NameModal = ()=>{
        if (!showNameModal) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Ваше имя для постов"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: customName,
                        onChange: (e)=>setCustomName(e.target.value),
                        placeholder: "Введите ваше имя",
                        className: "form-input"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: saveNewName,
                                className: "submit-btn",
                                children: "Сохранить"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetToRandomName,
                                className: "secondary-btn",
                                children: "Случайное имя"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowNameModal(false),
                                className: "cancel-btn",
                                children: "Отмена"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "blog-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "blog-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "📝 Блог с тегами"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Вы публикуете как: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: currentUserName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleChangeName,
                                        className: "change-name-btn",
                                        children: "✎ Изменить"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "back-link",
                                children: "← На главную"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "blog-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Новый пост"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Поиск по тегу...",
                                        value: searchTag,
                                        onChange: (e)=>setSearchTag(e.target.value),
                                        className: "search-input"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTagSearch(searchTag),
                                        className: "search-btn",
                                        children: "Найти"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    searchTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearSearch,
                                        className: "clear-btn",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "post-form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Заголовок",
                                        value: newPost.title,
                                        onChange: (e)=>setNewPost({
                                                ...newPost,
                                                title: e.target.value
                                            }),
                                        className: "form-input",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        placeholder: "Текст поста...",
                                        value: newPost.content,
                                        onChange: (e)=>setNewPost({
                                                ...newPost,
                                                content: e.target.value
                                            }),
                                        className: "form-textarea",
                                        rows: 4,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tags-input",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Добавить тег",
                                                value: newPost.tagInput,
                                                onChange: (e)=>setNewPost({
                                                        ...newPost,
                                                        tagInput: e.target.value
                                                    }),
                                                onKeyDown: (e)=>e.key === 'Enter' && (e.preventDefault(), addTag()),
                                                className: "tag-input"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: addTag,
                                                className: "add-tag-btn",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "selected-tags",
                                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag",
                                                children: [
                                                    "#",
                                                    tag,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>removeTag(tag),
                                                        className: "remove-tag",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, tag, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "submit-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-as",
                                                children: [
                                                    "Публикуется как: ",
                                                    currentUserName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: submitting,
                                                className: "submit-btn",
                                                children: submitting ? 'Публикация...' : 'Опубликовать'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "posts-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    searchTag ? `Посты с тегом: #${searchTag}` : 'Все посты',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "count",
                                        children: [
                                            " (",
                                            posts.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "loading",
                                children: "Загрузка..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this) : posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "no-posts",
                                children: searchTag ? `Нет постов с тегом #${searchTag}` : 'Пока нет постов'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "posts-list",
                                children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "post-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleLike(post.id),
                                                        className: "like-btn",
                                                        children: [
                                                            "❤️ ",
                                                            post.likes_count || 0
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "post-meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "👤 ",
                                                            post.author_name || 'Гость'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "📅 ",
                                                            formatDate(post.created_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this),
                                            post.tags && post.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "post-tags",
                                                children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleTagSearch(tag),
                                                        className: "post-tag",
                                                        children: [
                                                            "#",
                                                            tag
                                                        ]
                                                    }, tag, true, {
                                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "post-content",
                                                children: post.content
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, post.id, true, {
                                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NameModal, {}, void 0, false, {
                fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/react-app/src/app/blog/page.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "kGFT0wKm2/YY1seI/2vHvv9PZWQ=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_react-app_src_3892973d._.js.map