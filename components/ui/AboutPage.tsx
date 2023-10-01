"use client";

import React from "react";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <div className=" border-solid border-2 border-gray-100 h-[100%] lg:h-screen mt-4 rounded-3xl">
        <div className="flex flex-wrap relative p-10 ">
          <div className="p-2">
            <h1 className="text-3xl font-[600] text-[#0671E0]">This is our page</h1>
            <div className="pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam blanditiis deleniti unde rerum minus! Aliquid, sed
              dolorem. Enim voluptate quasi labore doloribus, adipisci
              exercitationem obcaecati quaerat ut voluptatibus sapiente
              doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facere nemo blanditiis, repellendus quam odit dolorum! Illo,
              enim quidem! Amet, quia deleniti. Sunt nesciunt minima rem
              asperiores tempore eligendi voluptate a. Velit rem, nostrum
              accusantium, hic repellendus laborum tempore ipsa, quidem
              temporibus est id. Facilis tenetur earum in ipsum provident quidem
              rem consequuntur nulla repellendus. Beatae cupiditate cumque
              aliquid ad reiciendis. Quibusdam delectus aspernatur nam magnam
              recusandae atque in libero veritatis fuga blanditiis error, animi
              a, laboriosam eos ad voluptatum placeat! Rem porro magni unde
              accusantium voluptate eos maiores deleniti id? Recusandae ut
              quaerat suscipit iusto fuga laudantium nulla itaque esse! Enim,
              dolorum modi laudantium culpa animi id accusamus! Commodi, odio.
              Iste corrupti sint odit quam, provident eligendi. In, recusandae
              cumque! Perferendis repellat nostrum nesciunt commodi quis fugiat
              error facilis, enim sint suscipit magnam labore quasi reiciendis
              rerum eos quo molestias vitae! Alias et nesciunt quas molestiae
              nihil rem neque vel. Nobis, adipisci esse! Perferendis, labore.
              Iste, laudantium neque ipsam dolores ut doloremque doloribus
              pariatur nesciunt? Fugit, voluptates maiores ullam, cumque placeat
              consequatur asperiores accusamus molestias, tempore quam in!
              Aperiam, explicabo? Dolor inventore sequi magni officiis ratione
              illo incidunt nobis ducimus libero. Aliquid, sunt nemo sequi totam
              in reiciendis debitis, dicta repudiandae rerum ad minima fugit,
              blanditiis nulla. Voluptates, praesentium sequi. Cumque
              repudiandae culpa similique. Adipisci numquam optio inventore eius
              magni cupiditate unde nam, blanditiis commodi tempore dolorum
              iusto nulla quis vitae reiciendis ea hic, doloremque cum dolore at
              doloribus. Cum. Id sint rem odit reprehenderit earum deserunt
              quod, perferendis mollitia quasi autem excepturi delectus dolores
              aliquid eligendi cupiditate. Eligendi explicabo neque illum
              pariatur consectetur iusto dolores cumque, ex molestiae quae?
              Excepturi necessitatibus, saepe est nobis sequi quaerat earum.
              Sequi, ratione! Fugiat commodi impedit perferendis facilis tempora
              similique magni sequi at nesciunt, unde, tenetur dolorem iste
              veniam doloribus. Magnam, eligendi quae?
            </div>
          </div>

          <div className=" flex items-center justify-center flex-col ml-auto mr-auto ">
            <h1 className="text-3xl font-light p-2">
              Wanaa see projects or want to create one
            </h1>
            <Link href="/projects" >
              <button className="p-2 m-1 bg-black  text-white border-solid border-2 h-[100%] inline-block rounded-lg">
                click here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
