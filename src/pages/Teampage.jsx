import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const people = [
    {
      name: 'Sanpitch Phuvapaisankit',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/434853572_2766684323489078_8750390105879673184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBCsmh4mVUB3XvQiRUbkUKphJZOpE85s6mElk6kTzmzr64oKjVXH5m_b8N64KHgSQY76amiyokx_AYU8n3hslZ&_nc_ohc=jOlydjLIClsQ7kNvgFc0bcZ&_nc_ht=scontent.fbkk22-8.fna&oh=00_AYBAx19XorOy1FcwPec_ztsFLXBTI3utF5jljL-2ZmKUfA&oe=664CECE4',
    },
    {
        name: 'Sanpitch Phuvapaisankit',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/434853572_2766684323489078_8750390105879673184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBCsmh4mVUB3XvQiRUbkUKphJZOpE85s6mElk6kTzmzr64oKjVXH5m_b8N64KHgSQY76amiyokx_AYU8n3hslZ&_nc_ohc=jOlydjLIClsQ7kNvgFc0bcZ&_nc_ht=scontent.fbkk22-8.fna&oh=00_AYBAx19XorOy1FcwPec_ztsFLXBTI3utF5jljL-2ZmKUfA&oe=664CECE4',
      },
      {
        name: 'Sanpitch Phuvapaisankit',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/434853572_2766684323489078_8750390105879673184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBCsmh4mVUB3XvQiRUbkUKphJZOpE85s6mElk6kTzmzr64oKjVXH5m_b8N64KHgSQY76amiyokx_AYU8n3hslZ&_nc_ohc=jOlydjLIClsQ7kNvgFc0bcZ&_nc_ht=scontent.fbkk22-8.fna&oh=00_AYBAx19XorOy1FcwPec_ztsFLXBTI3utF5jljL-2ZmKUfA&oe=664CECE4',
      },
      {
        name: 'Sanpitch Phuvapaisankit',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/434853572_2766684323489078_8750390105879673184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBCsmh4mVUB3XvQiRUbkUKphJZOpE85s6mElk6kTzmzr64oKjVXH5m_b8N64KHgSQY76amiyokx_AYU8n3hslZ&_nc_ohc=jOlydjLIClsQ7kNvgFc0bcZ&_nc_ht=scontent.fbkk22-8.fna&oh=00_AYBAx19XorOy1FcwPec_ztsFLXBTI3utF5jljL-2ZmKUfA&oe=664CECE4',
      },
  ]

export class Teampage extends Component {
  render() {
    return (
        <>
       <Header/>
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
    )
  }
}

export default Teampage