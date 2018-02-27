import React from 'react'
import ShareButton from 'react-social-share-buttons'

const TwitterShare = () => (
    <div>
       <ShareButton
        compact
        socialMedia={'twitter'}
        url={"http://coworkinc.net/welcoming-impact-hub-jakarta-at-coworkinc/"}
        media={"https://coworker.imgix.net/photos/indonesia/jakarta/coworkinc/main-1512030961.jpeg?w=488&h=257&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle"}
        text="Sit by a lake"
      />
    </div>
  )

export default TwitterShare
