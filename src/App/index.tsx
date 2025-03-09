import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  return(
    // <Redirect href="/memo/list" />
    // <Redirect href="/memo/detail" />
    // <Redirect href="/memo/edit" />
    // <Redirect href="/memo/create" />
    <Redirect href="/auth/log_in" />
    // <Redirect href="/auth/sign_up" />
  )
}

export default Index
