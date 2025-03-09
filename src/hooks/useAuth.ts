// import { useState } from 'react'
// import { router } from 'expo-router'

// interface AuthForm {
//   email: string
//   password: string
// }

// interface UseAuth {
//   form: AuthForm
//   handleEmailChange: (text: string) => void
//   handlePasswordChange: (text: string) => void
//   handleSubmit: (type: 'login' | 'signup') => void
// }

// export const useAuth = (): UseAuth => {
//   const [form, setForm] = useState<AuthForm>({
//     email: '',
//     password: ''
//   })

//   const handleEmailChange = (text: string): void => {
//     setForm((prev) => ({
//       ...prev,
//       email: text
//     }))
//   }

//   const handlePasswordChange = (text: string): void => {
//     setForm((prev) => ({
//       ...prev,
//       password: text
//     }))
//   }

//   const handleSubmit = (type: 'login' | 'signup'): void => {
//     // 基本的なバリデーション
//     if (form.email.trim() === '' || form.password.trim() === '') {
//       return
//     }

//     // ここで認証処理を実装
//     // type === 'login' ? ログイン処理 : サインアップ処理

//     // 認証成功後に画面遷移
//     router.push('/memo/list')
//   }

//   return {
//     form,
//     handleEmailChange,
//     handlePasswordChange,
//     handleSubmit
//   }
// }
