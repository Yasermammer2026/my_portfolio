import { useState, useRef, useEffect } from 'react'

const posts = [
  { id: 1, title: 'Python 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex assumenda ducimus cupiditate.' },
  { id: 2, title: 'Python 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex assumenda ducimus cupiditate.' },
  { id: 3, title: 'Python 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex assumenda ducimus cupiditate.' },
  { id: 4, title: 'Python 4', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex assumenda ducimus cupiditate.' },
  { id: 5, title: 'Python 5', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ex assumenda ducimus cupiditate.' },
]

function getBoxesVisible() {
  if (window.innerWidth < 570) return 1
  if (window.innerWidth < 767) return 2
  if (window.innerWidth < 992) return 3
  return 4
}

export default function Blog() {
  const [currSlide, setCurrSlide] = useState(0)
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxesVisible, setBoxesVisible] = useState(4)
  const boxRef = useRef(null)

  useEffect(() => {
    const update = () => {
      if (boxRef.current) setBoxWidth(boxRef.current.offsetWidth)
      setBoxesVisible(getBoxesVisible())
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxSlide = posts.length - boxesVisible

  const prev = () => setCurrSlide(s => Math.max(s - 1, 0))
  const next = () => setCurrSlide(s => Math.min(s + 1, maxSlide))

  return (
    <section className="my-blog" id="blog">
      <h3 className="heading">My <span>Blog</span></h3>
      <div className="container">
        <i
          className={`fa-solid fa-angle-left left-btn${currSlide === 0 ? ' disabeld' : ''}`}
          onClick={prev}
        ></i>
        <div className="wrapper">
          <div
            className="blog"
            style={{ transform: `translateX(${-(currSlide * (boxWidth + 20))}px)` }}
          >
            {posts.map((post, i) => (
              <div className="box" key={post.id} ref={i === 0 ? boxRef : null}>
                <img src="/image/blog.jpg" alt="" />
                <div className="text">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
                <div className="footer-box">
                  <a href="#" className="btn">Read More</a>
                  <a href="#"><i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <i
          className={`fa-solid fa-angle-right right-btn${currSlide >= maxSlide ? ' disabeld' : ''}`}
          onClick={next}
        ></i>
      </div>
    </section>
  )
}
