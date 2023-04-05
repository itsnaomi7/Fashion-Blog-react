// import image from "./public/image.jpg";
// import otherimage from "./public/otherimage.jpg";

export default function BlogPostCopy() {
  return (
    <>
      <article>
        <h3 class="time">11/12/20</h3>
        <h3 class="title">On the Street in Broklyn</h3>
        <img src={require("../../public/image.jpg")} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          perspiciatis beatae quasi harum saepe aliquam consequuntur quis minima
          illum explicabo eius consectetur, ut vero quaerat. Provident
          repudiandae iusto numquam atque?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Totam in, quia fugit ducimus sit saepe quaerat
          recusandae sint corrupti, soluta deleniti quasi error placeat atque
          repellat, molestiae ratione nihil iste Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laborum molestiae rem deserunt veritatis
          molestias assumenda nemo aliquam ut labore omnis consequatur
          praesentium earum, sapiente voluptatibus placeat enim beatae id?
          Ad?uaerat recusandae sint corrupti, soluta deleniti quasi error
          placeat atque repellat, molestiae ratione nihil iste Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Laborum molestiae rem deserunt
          veritatis molestias assumenda nemo aliquam ut labore omnis consequatur
          praesentium earum, sapiente voluptatibus placeat enim Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Adipisci ratione, totam
          repellat minima porro maiores esse dolorum ipsum autem consectetur
          libero, excepturi, officia nostrum mollitia expedita commodi rerum
          dignissimos amet.
        </p>
        <a class="continue" href="...">
          Continues...
        </a>
      </article>
      <article>
        <h3 class="time">11/11/20</h3>
        <h3 class="title">Vintage in Vogue</h3>
        <img src={require("../../public/otherimage.jpg")} />
        <p>
          Sorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore,
          fugiat, consequatur rerum itaque neque deserunt suscipit magni maxime
          nostrum commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi labore, fugiat, consequatur rerum itaque neque
          deserunt suscipit magni maxime nostrum commodi libero nam tenetur
          nesciunt quibusdam explicabo ipsum perferendis impedit? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sequi labore, fugiat,
          consequatur rerum itaque neque deserunt suscipit magni maxime nostrum
          commodi libero nam tenetur nesciunt quibusdam explicabo ipsum
          perferendis impedit?
        </p>
        <a href="...">Continues...</a>
      </article>
    </>
  );
}
