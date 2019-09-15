import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

export default class Tribute extends Component {
  render(){
    return (
      <Fragment>
      <main id="main">
        <h1 id="title">Gabriel Fauré</h1>
        <div id="img-div">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Faure1907.jpg" alt="" id="image" style={{ maxWidth: '50%', display: 'block', margin: 'auto' }} />
          <p id="img-caption">Fauré in 1907</p>
        </div>
        <section id="tribute-info">
          <p>Gabriel Urbain Fauré (French: [ɡabʁiɛl yʁbɛ̃ fɔʁe];[1] 12 May 1845 – 4 November 1924)[n 1] was a French composer, organist, pianist and teacher. He was one of the foremost French composers of his generation, and his musical style influenced many 20th-century composers. Among his best-known works are his Pavane,[4] Requiem, Sicilienne, nocturnes for piano and the songs "Après un rêve" and "Clair de lune". Although his best-known and most accessible compositions are generally his earlier ones, Fauré composed many of his most highly regarded works in his later years, in a more harmonically and melodically complex style.</p>
          <p>Fauré was born into a cultured but not especially musical family. His talent became clear when he was a small boy. At the age of nine, he was sent to the Ecole Niedermeyer music college in Paris, where he was trained to be a church organist and choirmaster. The Ecole Neidermeyer's pedagogy differed greatly from that of the Paris Conservatoire. Among his teachers was Camille Saint-Saëns, who became a lifelong friend. After graduating from the college in 1865, Fauré earned a modest living as an organist and teacher, leaving him little time for composition. When he became successful in his middle age, holding the important posts of organist of the Église de la Madeleine and director of the Paris Conservatoire, he still lacked time for composing; he retreated to the countryside in the summer holidays to concentrate on composition. By his last years, Fauré was recognised in France as the leading French composer of his day. An unprecedented national musical tribute was held for him in Paris in 1922, headed by the president of the French Republic. Outside France, Fauré's music took decades to become widely accepted, except in Britain, where he had many admirers during his lifetime.</p>
          <p>Fauré's music has been described as linking the end of Romanticism with the modernism of the second quarter of the 20th century. When he was born, Chopin was still composing, and by the time of Fauré's death, jazz and the atonal music of the Second Viennese School were being heard. The Grove Dictionary of Music and Musicians, which describes him as the most advanced composer of his generation in France, notes that his harmonic and melodic innovations influenced the teaching of harmony for later generations. During the last twenty years of his life, he suffered from increasing deafness. In contrast with the charm of his earlier music, his works from this period are sometimes elusive and withdrawn in character, and at other times turbulent and impassioned.</p>
          <Link to='https://en.wikipedia.org/wiki/Gabriel_Faur%C3%A9' target='_blank' id='tribute-link'>Check out more</Link>
        </section>
      </main>
      <Link to='/'>Head Back</Link>
    </Fragment>
    )
  }
}
