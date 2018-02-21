export const posts = {
  store: "POSTS",
  featured: [], // array of featured posts
  all: [
    // array of dummy posts
    {
      id: 1,
      title: "One One One",
      image: {
        title: "Abstract",
        url: `${process.env.REACT_APP_API_URL}/images/posts/abstract.jpg`
      },
      creator: {
        username: "one",
        name: "One Punch Man"
      }
    },
    {
      id: 2,
      title: "Two Two Two",
      image: {
        title: "Abstract",
        url: `${process.env.REACT_APP_API_URL}/images/posts/abstract.jpg`
      },
      creator: {
        username: "two",
        name: "Two Times"
      }
    },
    {
      id: 3,
      title: "Three Three Three",
      image: {
        title: "Abstract",
        url: `${process.env.REACT_APP_API_URL}/images/posts/abstract.jpg`
      },
      creator: {
        username: "three",
        name: "Three Tree"
      }
    }
  ],
  selected: {}
}

export const topics = {
  store: "TOPICS",
  all: [
    // array of basic topics
    {
      title: "All",
      path: "/topics"
    },
    {
      title: "Technology",
      path: "/t/technology"
    },
    {
      title: "Design",
      path: "/t/design"
    },
    {
      title: "Software",
      path: "/t/software"
    },
    {
      title: "Culture",
      path: "/t/culture"
    },
    {
      title: "Career",
      path: "/t/career"
    }
  ],
  selected: {} // single topic
}

export const profile = {
  store: "PROFILE",
  selected: {
    userstore: "", // mhaidarh
    store: "", // M Haidar Hanif
    bio: "", // Educating people through technology to move humanity forward.
    posts: [] // {}
  }
}

export const auth = {
  store: "AUTH",
  token: "", // JWT
  account: {}, // decoded JWT
  login: false // true if logged in with JWT
}

export const register = {
  store: "REGISTER",
  name: "", // input text
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const login = {
  store: "LOGIN",
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const newPost = {
  store: "NEW_POST",
  title: "", // input text
  image_url: "", // input text
  content: "", // input textarea
  created_at: "", // save for notes
  updated_at: "", // save for notes
  loading: false // when submitting
}

export default {
  posts,
  topics
}
