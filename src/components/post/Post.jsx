import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://cdn.motor1.com/images/mgl/Oky7Y/s4/porsche-911-turbo-s-vs-audi-r8-performance-acceleration-tests-show-one-clear-winner.webp" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            kategori 1
          </span>
          <span className="postCat">
            kategori 2
          </span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit veniam porro blanditiis, sit explicabo alias fuga voluptatem quasi, quam magni ipsa repudiandae, quidem commodi tenetur cum distinctio corrupti ducimus sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis in culpa maxime accusantium, adipisci facere labore numquam optio repellat amet! Velit, doloribus facilis neque provident itaque aut alias distinctio!
      </p>
    </div>
  )
}