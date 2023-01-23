import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const BlogPage = () => {
  var x;
  function fetchdata() {
    fetch("http://127.0.0.1:8001/api/Blog/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <Header />
      <div className="text-[50px] text-center">Blog Heading</div>
      <div className="w-[100%]  ">
        <img className="object-fill w-[100%] h-[700px]" src="xyz.png" alt="" />
      </div>
      <div className="w-[80%] ml-[10%] mb-24">
        <div className="flex h-12 justify-between">
          <div className="flex justify-start h-auto">
            <div className="">
              <img
                className="w-[40px] h-[40px] rounded-full "
                src="./ceo.jpeg"
                alt="ceo_picture"
              />
            </div>

            <div className=" pl-2">
              <div className="">Taha Mahmood</div>
              <div className="text-xs font-light text-black-500">CEO</div>
            </div>
          </div>
          <div className="Date">Date e.t.c</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          laborum dolorum nemo quas facere! Voluptate quibusdam quasi saepe
          dicta distinctio velit tempore facilis impedit nihil doloribus quos
          vel temporibus ea obcaecati aliquam sequi deserunt, iusto culpa natus
          quaerat atque quod explicabo repellat! Repellendus nesciunt laborum
          iste quia non ab unde illo dolorum molestiae facere quos quis
          dignissimos, veniam natus cumque a sunt delectus quas amet ipsum.
          Soluta possimus corrupti sunt eaque eos velit esse assumenda facere
          officia? Fugiat nobis nemo quod autem accusantium laudantium, sint
          odio at veritatis cum reprehenderit consequuntur unde delectus,
          dolorum libero deleniti enim dolor quo? Repudiandae magni similique
          nihil ipsa quasi delectus? Eaque dolorem fuga voluptates! Dolorem esse
          numquam recusandae, debitis consequatur qui ad quibusdam nam tenetur
          voluptas laudantium officia error non dolore quas magnam praesentium
          quos? Perspiciatis omnis et dolore voluptates accusantium sit modi
          loremque voluptates esse officia? Ipsam sit dolor perspiciatis nam
          neque ab fuga explicabo reprehenderit praesentium quaerat? Odit
          laborum facilis aut blanditiis quis, sapiente, ullam tempora, ducimus
          beatae possimus ab asperiores et? Magni unde hic excepturi
          consequuntur recusandae nulla atque eveniet sapiente sunt asperiores
          non, officiis vero perspiciatis placeat ipsum sed maiores dignissimos.
          Magnam, commodi. Molestias odit dicta consequuntur, sed, impedit
          deserunt enim excepturi aperiam repudiandae quod sint? Nobis earum
          blanditiis rem, consequatur aspernatur nesciunt aut quod, omnis
          incidunt laudantium perspiciatis assumenda corrupti numquam
          praesentium sed rerum officia quo quaerat velit maxime iure vel sint!
          Voluptas laudantium corrupti delectus suscipit itaque, id quis maiores
          quo ex nulla minus repellendus eum quia sit! Ullam quis culpa error
          dolorum asperiores vero adipisci, voluptatibus doloremque similique
          amet temporibus natus molestias sequi cum laborum tempora. Consequatur
          eius veniam explicabo nemo cumque recusandae sit labore. Aspernatur
          quam natus incidunt cum possimus commodi hic, porro suscipit aliquam.
          Deserunt quia aspernatur modi, ab illo laborum est, praesentium
          cupiditate eaque neque voluptatum nesciunt iusto rerum, suscipit
          consectetur iure? Cumque quam repellat nisi vitae iusto. Impedit in
          sapiente, repellat vitae sed officia voluptatibus minima. Eos
          laudantium reprehenderit sapiente voluptatem. Rem quasi porro amet
          provident ipsum iure, corrupti repellat natus voluptas accusamus
          aliquid beatae magnam qui obcaecati cum dignissimos unde numquam! Rem.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogPage;
