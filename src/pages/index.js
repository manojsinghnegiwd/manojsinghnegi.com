import React from "react"
import Container from "../components/Container"

import { TWITTER_LINK, MEDIUM_LINK, LINKEDIN_LINK, RECRAFT_RELIC, MY_BLOG, GITHUB_LINK } from "../utils/constants"

import "./index.scss"

const IndexPage = () => {
  return (
    <Container>
      <div className="div-50">
        <h1 className="username">@manojsinghnegiwd</h1>
        <p className="description">
          Hi, I'm Manoj Singh Negi.
          <br />
          Co-Founder at <a className="recraftlink" href={RECRAFT_RELIC}>@RecraftRelic</a>.
          <br />
          I love JavaScript and mostly spend my day programming in <span className="tech js">JavaScript</span>,
          <span className="tech reactjs">ReactJs</span> & <span className="tech nodejs">Nodejs</span> solving problems. I write at <a href={MY_BLOG}>My Blog</a> & <a href={MEDIUM_LINK}>Medium</a>.
        </p>
        <a className="social-link medium" href={MEDIUM_LINK}>medium/@manojsinghnegi</a>
        <br />
        <a className="social-link twitter" href={TWITTER_LINK}>twitter/manojnegiwd</a>
        <br />
        <a className="social-link linkedin" href={LINKEDIN_LINK}>linkedin/manojsinghnegiwd</a>
        <br />
        <a className="social-link github" href={GITHUB_LINK}>github/manojsinghnegiwd</a>
      </div>
    </Container>
  )
}

export default IndexPage
