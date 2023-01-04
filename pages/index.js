import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={"image-container"}>
          <Image
            className={styles.bannersMobile}
            alt="Banner"
            src="/banner2.png"
            width={360}
            height={475}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
              maxWidth: "1200px",
            }}
          />
          <Image
            className={styles.banners}
            alt="Banner"
            src="/banner desktop.png"
            width={360}
            height={475}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
            }}
          />
        </div>

        <div id="HomeText">
          <h2 className={styles.texthome}>we&apos;re here to help</h2>
          <h3 className={styles.texthome2}>
            When it comes to caring for our most intimate areas, we&apos;ve lost our
            connection.
          </h3>
          <h3 className={styles.texthome2}>
            Embarrassed, unwilling, or unable to communicate with others, we&apos;re
            needlessly neglecting the parts of our bodies that need it most.
          </h3>
          <h3 className={styles.texthome2}>
            We&apos;re here to help. Providing you with the expertise, knowledge and
            products you need to feel confident in your personal care.
          </h3>
        </div>

        <div id="Icons">
          <Image
            alt="Banner"
            src="/icons@2x.png"
            width={121}
            height={475}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
              maxWidth: "800px",
            }}
          />
        </div>

        <div id="texthome2">
          <h2 className={styles.texthome}>
            whatever your age. whatever your lifestyle. whatever your interests.
          </h2>

          <h3 className={styles.texthome2}>
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health.
          </h3>

          <h3 className={styles.texthome2}>
            As the experts in intimate hygiene, we want to bring discussion
            about intimate wellness care out of the dark and demystify the
            taboos that surround it.
          </h3>
        </div>

        <div id="carousel">
          <span>
            <h2 className={styles.texthome}>our products</h2>
          </span>
          <div>
            <div className={styles.carousel}>
              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/image mask@2x.png"
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "75vw",
                    height: "auto",
                    maxWidth: "200px",
                  }}
                />
                <span>intibiome wellness daily intimate wash</span>
                <div className={styles.subtitle}>
                  <h4> wellness</h4>
                </div>
              </div>

              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/image mask2@2x.png"
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "75vw",
                    height: "auto",
                    maxWidth: "200px",
                  }}
                />
                <span>intibiome active extra protection intimate wash</span>
                <div className={styles.subtitle2}>
                  <h4> active</h4>
                </div>
              </div>

              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/image mask3@2x.png"
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "70vw",
                    height: "auto",
                    maxWidth: "200px",
                  }}
                />
                <span>intibiome agecare dryness relief intimate wash</span>
                <div className={styles.subtitle3}>
                  <h4> agecare</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bannerFooter">
          <Image
            className={styles.bannersMobile}
            alt="Banner"
            src="/bannerfooter2.png"
            width={360}
            height={475}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
              maxWidth: "700px",
            }}
          />

          <Image
            className={styles.banners}
            alt="Banner"
            src="/Asset 22@2X.png"
            width={360}
            height={475}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
            }}
          />
        </div>

        <div id="carousel2">
          <span>
            <h2 className={styles.texthome}>
              keep up to date with our discoveries
            </h2>
          </span>
          <div>
            <div className={styles.carousel}>
              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/foto1-2.png"
                  width={100}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "80vw",
                    height: "auto",
                    maxWidth: "350px",
                  }}
                />
                <span>intibiome wellness daily intimate wash</span>
              </div>

              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/foto2-2.png"
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "80vw",
                    height: "auto",
                    maxWidth: "350px",
                  }}
                />
                <span>intibiome active extra protection intimate wash</span>
              </div>

              <div className={styles.card}>
                <Image
                  alt="Banner"
                  src="/foto3-2.png"
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "80vw",
                    height: "auto",
                    maxWidth: "350px",
                  }}
                />
                <span>intibiome agecare dryness relief intimate wash</span>
              </div>
            </div>
          </div>

          <div id="button" className={styles.buttoncontainer}>
            <button className={styles.subtitle1}> see more</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
