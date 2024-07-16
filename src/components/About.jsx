import React, { useState } from 'react';

function About() { 

    return(
        <section id="about" className="flex flex-col items-center p-10 bg-dark-violet text-white">
            <h2 className="text-4xl font-bold text-white font-custom mb-6">About me</h2>
            <p className="text-lg text-white font-custom">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore optio maiores earum amet ex dolor officia excepturi nulla! Rem pariatur nesciunt blanditiis autem a doloremque ex consequuntur porro itaque similique. Voluptatem modi, asperiores ipsa unde numquam fugit error neque obcaecati adipisci tempora doloremque corporis, quod sed cum vel distinctio? Id a officiis voluptas magnam odio maxime sapiente aut nihil, voluptates ipsam ea eum corrupti vero vel quasi deserunt molestiae, rerum ipsum labore reiciendis repellat nostrum! Doloribus perspiciatis est dicta iste reiciendis earum tenetur deleniti ea dolorum aspernatur adipisci laudantium magni eum blanditiis, sapiente sed velit fugit soluta excepturi? Corrupti non explicabo, sequi labore  </p>
            <div>
                <button className="bg-vert">CV</button>
                <button className='bg-violet'>Contact</button>
            </div>
        </section>
    );
 }

 export default About;