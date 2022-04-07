import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://cdn.motor1.com/images/mgl/Oky7Y/s4/porsche-911-turbo-s-vs-audi-r8-performance-acceleration-tests-show-one-clear-winner.webp" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor
          <div className="singlePostEdit">
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Penulis</span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos praesentium. Hic soluta nam dolore, sequi adipisci autem voluptatum beatae qui, blanditiis cupiditate, voluptatem voluptate numquam repellendus ipsam delectus. Voluptate.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos praesentium. Hic soluta nam dolore, sequi adipisci autem voluptatum beatae qui, blanditiis cupiditate, voluptatem voluptate numquam repellendus ipsam delectus. Voluptate.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos praesentium. Hic soluta nam dolore, sequi adipisci autem voluptatum beatae qui, blanditiis cupiditate, voluptatem voluptate numquam repellendus ipsam delectus. Voluptate.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos praesentium. Hic soluta nam dolore, sequi adipisci autem voluptatum beatae qui, blanditiis cupiditate, voluptatem voluptate numquam repellendus ipsam delectus. Voluptate.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos praesentium. Hic soluta nam dolore, sequi adipisci autem voluptatum beatae qui, blanditiis cupiditate, voluptatem voluptate numquam repellendus ipsam delectus. Voluptate.
        </p>
      </div>
    </div>
  )
}