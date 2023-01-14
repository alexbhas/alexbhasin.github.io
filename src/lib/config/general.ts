import type { ThemeConfig, HeadConfig, HeaderConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'light',
    text: 'Marble'
  },
  {
    name: 'winter',
    text: 'Frosty'
  },
  {
    name: 'dracula',
    text: 'Moonlight'
  },
  {
    name: 'night',
    text: 'Sapphire'
  },
  {
    name: 'valentine',
    text: 'Bubblegum'
  },
  {
    name: 'synthwave',
    text: 'Electric'
  }

]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'About',
      link: '/about'
    },
    {
      text: 'Experience',
      link: '/experience'
    },
    {
      text: 'Projects',
      link: '/projects'
    },
    {
      text: 'Download CV',
      link: 'https://drive.google.com/file/d/1aAIyZ7x7LqDmOpJQYi5FP-4fyB_xa1v1/view?usp=sharing'
    }
  ]
}



export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
