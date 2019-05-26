import React, { FC, useState, ChangeEvent, SyntheticEvent } from 'react'
import './App.css'
import ProfileList from './ProfileList'
import { Button, Form } from 'semantic-ui-react'
import _ from 'lodash'

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
  const [love, setLove] = useState("")
  const [sex, setSex] = useState("")
  const [age, setAge] = useState(1)
  const [profiles, setProfile] = useState(defaultProfile)

  const addProfile = () => {
    const newProfile = {
      id: profiles.length + 1,
      name: name,
      age: age,
      love: love,
      sex: sex,
    }
    setProfile([...profiles, newProfile])
  }

  const sexOptions = [
    { key: 'm', text: '男', value: 'male' },
    { key: 'f', text: '女', value: 'female' },
    { key: 'o', text: 'その他', value: 'other' },
  ]

  const ages = []

  for(let i = 1; i <= 100; i++) {
    ages.push(i)
  }

  const ageOptions = _.map(ages, age => ({
    key: age,
    text: age,
    value: age
  }))

  return (
    <div className='container'>
      <header>
        <h1>プロフィール作成アプリだよ</h1>
      </header>
      <ProfileList group='テストグループ' profiles={profiles} />
      <Form onSubmit={addProfile}>
        <Form.Field>
          <Form.Input fluid label='名前' placeholder='太郎' onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
        </Form.Field>
        <Form.Field>
          <Form.Input fluid label='好きなもの' placeholder='お酒/技術/...' onChange={(e: ChangeEvent<HTMLInputElement>) => setLove(e.currentTarget.value)} />
        </Form.Field>
        <Form.Field>
          <Form.Select fluid label='性別' options={sexOptions} placeholder='性別' onChange={(e: SyntheticEvent<HTMLElement>) => {setSex(e.currentTarget.innerText)}}/>
        </Form.Field>
        <Form.Field>
          <Form.Select fluid label='年齢' options={ageOptions} placeholder='25' onChange={(e: SyntheticEvent<HTMLElement>) => {setAge(parseInt(e.currentTarget.innerText))}}/>
        </Form.Field>
        <Button type='submit'>プロフィールを追加する</Button>
      </Form>
    </div>
  );
}

export default App
