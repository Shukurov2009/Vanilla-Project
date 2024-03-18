import "./contact.css"

export const Input = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="contact-inner">
            <form action="" className="form">
              <h2 className="contact-big-text">
                Have Question in Mind? Let us help you
              </h2>
              <div className="input-box">
                <input type="text" className="input" placeholder='Your phone number' />
                <input type="text" className="input" placeholder='Question type' />
              </div>
              <div className="input-box">
                <input type="text" className="box-input" placeholder='Enter your question' />
                <button className="inp-btn" type="reset">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section >
    </>
  )
}
