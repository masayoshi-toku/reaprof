import React, { FC, useState, ChangeEvent } from 'react'
import './App.css'
import ProfileList from './ProfileList'
import { Button, Form } from 'semantic-ui-react'

const App: FC = () => {
  const defaultProfile = [
          {
            id: 1,
            name: 'まさ',
            age: 25,
            love: 'Ruby/Rails/JavaScript/Stimulus/React/Go',
            sex: '男'
          }
        ]

  const [name, setName] = useState("")
  const [profiles, setProfile] = useState(defaultProfile)

  const addProfile = () => {
    const newProfile = {
      id: 2,
      name: name,
      age: 1,
      love: 'unknown',
      sex: 'unknown',
    }
    setProfile([...profiles, newProfile])
  }

  return (
    <div className='container'>
      <header>
        <h1>年表型プロフィール作成アプリ</h1>
      </header>
      <ProfileList group='テストグループ' profiles={profiles} />
      <Form onSubmit={addProfile}>
        <Form.Field>
          <label>名前</label>
          <input placeholder='フルネーム' onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
        </Form.Field>
        <Button type='submit'>プロフィールを追加する</Button>
      </Form>
    </div>
  );
}

export default App
