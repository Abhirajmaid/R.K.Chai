"use client";
import { useParams } from "next/navigation";
import React from "react";
import { BlogsData } from "@src/data/data";
import Image from "next/image";
import { InfiniteMarquee } from "@src/components/common";
const page = () => {
  const param = useParams();

  const blog = BlogsData.find((item) => {
    return item.id == param.id;
  });
  return (
    <>
      <div className="mt-[120px] md:p-[6%] p-[3%]">
        <div>
          <Image
            src={blog.image}
            width={1000}
            height={1000}
            className="md:w-[90%] w-full md:h-[600px] h-[300px] mx-auto object-cover rounded-2xl"
          />
          <h1 className="md:text-[60px] text-[40px] font-semibold md:my-10 my-6 md:w-[65%] leading-[50px] text-left mx-auto">
            {blog.title}
          </h1>
        </div>
        <p className="md:w-[65%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quidem eveniet harum odio odit? Veritatis itaque totam in molestiae,
          sed eligendi, exercitationem quaerat soluta quam delectus eius aliquam
          voluptates? Perspiciatis accusantium maxime rem odio, eligendi nulla
          reiciendis eum obcaecati omnis necessitatibus facilis deleniti eveniet
          maiores inventore laboriosam tempore tempora ab ipsum, repellendus
          beatae expedita possimus delectus culpa! Eos consectetur voluptatum
          eum deleniti sunt recusandae minima nam assumenda dolorum, natus,
          rerum minus, necessitatibus nostrum neque. Ipsam cum esse recusandae
          explicabo, quas iure id debitis quibusdam, architecto quasi unde
          aspernatur odit? Dolorum obcaecati vero voluptates quas aperiam, alias
          eveniet consequuntur, laboriosam quasi modi et omnis consequatur
          tempora animi iure optio necessitatibus, qui sunt. Totam delectus modi
          amet natus atque cum minima tempore architecto eos quae illum ea
          assumenda est corporis, facilis nesciunt excepturi nihil, quo possimus
          dolor asperiores dolore beatae expedita? Quo magnam dolore eligendi
          asperiores quas exercitationem deleniti consequuntur rem veniam ullam
          laudantium eaque, assumenda facere pariatur nostrum maxime facilis
          quos atque aliquid, quaerat ipsam suscipit reprehenderit nobis dolor!
          Velit consectetur perspiciatis nostrum impedit voluptatibus ipsam
          culpa cumque consequuntur iusto quaerat modi omnis ratione tempora
          dolore cupiditate, repellat, odio veritatis quae, corporis dolores!
          Consequuntur dolorum consequatur rem aspernatur asperiores corrupti
          maiores. Voluptatem quod officiis, ipsa sint neque, unde animi et
          saepe corporis molestias quae rerum commodi quia temporibus, officia
          minima quasi cum vero? Ullam consectetur libero labore, error ipsam
          dicta reprehenderit iusto commodi rem! Dolorem autem totam numquam
          expedita beatae deserunt provident quae repudiandae porro quasi,
          exercitationem ab dicta quis minus? Sed quis quia veniam, iure optio
          maxime ipsam suscipit consectetur! Soluta iusto voluptatem officiis
          magnam provident, pariatur porro recusandae itaque fugit minus vitae
          ex quisquam velit sapiente, repellendus blanditiis. Dolorem sed minus
          repellat dicta atque! Nesciunt eligendi fugit quia in exercitationem
          adipisci odio amet facilis at? Illum officiis tenetur et reiciendis
          voluptatem, necessitatibus fugiat harum nobis, expedita reprehenderit
          debitis. Eligendi, minima vel tempore illo repellat nihil qui,
          voluptatibus libero perspiciatis suscipit dolores non ad vitae
          exercitationem ullam consectetur amet eaque sapiente tenetur. Facilis
          eos est commodi esse nostrum quis impedit corporis animi cumque
          distinctio nemo vitae voluptatibus ea harum deserunt, quo ipsum
          molestiae id atque ex quae dignissimos ipsa! Magnam nihil qui
          temporibus quis ad, nostrum provident deleniti quaerat commodi
          suscipit fugit in facilis veniam, voluptates quae id enim quod sint
          numquam ipsum nemo eos incidunt atque expedita. Error, ut quo maiores
          qui consequatur aut obcaecati fugiat nulla consequuntur! Eius,
          inventore est. Dolores quia magni provident quam, cumque aspernatur
          magnam incidunt fugit expedita eos, quis tempora nihil nostrum soluta
          pariatur? Facilis illo quidem
        </p>
      </div>
      <div className="h-fit mb-[50px]">
        <InfiniteMarquee txt="CHAI" />
      </div>
    </>
  );
};

export default page;
