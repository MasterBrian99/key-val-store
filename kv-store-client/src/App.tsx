import CreateApiKey from './components/CreateApiKey/CreateApiKey'
import GetValues from './components/GetValues/GetValues'
import Header from './components/Header/Header'
import SetValues from './components/SetValues/SetValues'

export const App = () => {
  return (
    <section className="main-body">
      <Header />
      <CreateApiKey />
      <SetValues />
      <GetValues />
    </section>
  )
}
