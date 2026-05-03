export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, i'm <span>Yasser mammer</span></h1>
        <div className="text-animate">
          <h3>Software Engineer</h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam ullam, sapiente ab laboriosam nam
          quod. Accusantium reiciendis temporibus, ut laboriosam dicta ea quis minus quia rem modi quos repellat.
        </p>
        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#" className="btn">let's Talk</a>
        </div>
        <div className="box-social">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <div className="image">
        <img src="/image/home.png" alt="" />
      </div>
    </section>
  )
}
