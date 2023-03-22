import React from 'react'
import { Helmet } from 'react-helmet'

export const Vendor = () => {
  return (
    <div>
        <Helmet>
        <link href="img/favicon.ico" rel="icon" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Font Awesome --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* <!-- Libraries Stylesheet --> */}
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="css/style.css" rel="stylesheet" />
      </Helmet>

      <div class="container-fluid py-5">
        <div class="row px-xl-5">
            <div class="col">
                <div class="owl-carousel vendor-carousel">
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-1.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-2.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-3.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-4.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-5.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-6.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-7.jpg" alt=""/>
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="img/vendor-8.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
