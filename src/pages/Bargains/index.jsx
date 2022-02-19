import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

import Megaphone from "../../assets/img/megaphone.svg";
import ImgFruits from "../../assets/img/fruits.png";

import { Main, Wrapper, SearchContainer, Search } from "./styles";

function Bargains() {
  return (
    <>
      <Header />
      <SearchContainer>
        <div>
          <img src={Megaphone} alt="Megaphone" />
          <h1>A new bombastic offer for you</h1>
        </div>
        <Search>
          <input type="text" placeholder="search here"></input>
          <ion-icon name="search-outline"></ion-icon>
        </Search>
      </SearchContainer>
      <Main>
        <section>
          <h2>Foods</h2>

          <Wrapper>
            <Link to={"./fruits"}>
              <img src={ImgFruits} alt="fruits" />
              <button type="button">Fruits</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/64a1/2854/67e889db5e2b02a9a4277272c1e63943?Expires=1646006400&Signature=gSoP2E2uQbeF6IYXStHVVYn1yzBaDXu7hYERKTEcve567PthNhajLXi3EucMBA7JXjgDM2udMbjEioFy7BCLM-s~n6VBzm64EcwvshnQ30KXH1Tz5ThBBO3DesP2ZLZzi4CiAUFh12b2hng7ieqPeCBbMFOlTBGqZbMeTgEpeYacB-SKMnlH-fmawnGSVhZqoiWT-Pq5P50NoLVavj3nrzDE3Yi1HXu9x4OLT61NuEC-h~aqeW76ceEmKNd3b3n~K-C2y3F74sNaz8Jncpd20krsqMWxNly7GPhr14qBE1lTtJLp7tNM6bXVLpDoiyYOr8kxgi-uytRe5MRVccEReg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Vegetables"
              />
              <button type="button">Vegetables</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/e90f/f7be/adc18c3d2f2d1bba137d2a2a314702d4?Expires=1646006400&Signature=XRfuCGx9yj3B-bKdq6R2F8uYkBxv7y1QnSqZH1HlJ8KTwwyT~vAxPKHMLyZLJZZIKMPNVQpRNMpR5FQgGCkvq-8rPur~Q8CTUEgwq5JnBNo4B~4AktN-cm8T2Gv~p~MCLareHC6JGdSLjpqd1iFkY9PHIJtaQj6T3OrAbqvoCiRVHKsRcMu~wk6nWKaImfJsYMbtwLuVLf-2HAzdKNcwdNvkYKGnWzjAIDiYy1xrKzHV6ciIamqQbGLw7QRoDISEA0Gd7l~P1hilEMJ6WzHiXCXWDrPj7SjF~SrwG7aK7m0WGjy~oteiy2026CnpRiLqAish5KOzQm-sSPQmuAP28g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Spicess"
              />
              <button type="button">Spices</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>House Parts</h2>

          <Wrapper>
            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/77cd/4602/aff2633fb98db78808c045dd2d5005da?Expires=1646006400&Signature=UHHZKfO-RiVB9jdFbA-r9mHSPVkeUg6Pn-k80idcx4qeDhwQC4BUFGUz4rTmAhAcwZ31Fpwlu-PT-VERDNzSIUAIq0nWtAzjxArUOYUqh4PNNw5fW17XBDj40SyWjAeVXkVfB5F2x~LtKHVzVDMXWx65J8UYRHLHHv9tuLhKKAvU6UD8NGIdQ0msgmgUmftSPC2AtHX52qzXLLTXY2usLxrxadZDPdSAu42M6UYHnWYtsbtuyBcW6edrrZY4uas0~NtFR09Q5fH5Jq3qOp4fD3U2uqR32EdAyTrqluYF9Mh-LBQlF7BK1NmoUNGYOCUdINYpXIDdM-OefiPy8vBqaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="fabrics"
              />
              <button type="button">Fabrics</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/18ac/8959/9de79cec2da2ef82ce1ef8b2688ec450?Expires=1646006400&Signature=bKiY~Yn2TInlkFuir0i5iUdt3b9CQv54ukLOPMrhbigMdlhnJrucAzokTv95nn4Q547ELJjqvXK1QVzpfdcVirQM0j3nwOSZbYXWmrdvOq-uWW9Fv2LHDA~LYIDTdn85b2hXlCl6IjehNukoTC2FfXJXeHVPNuve~p3pA9ij9AChyhusbgKOs996s5prIfQyqjYqcVhS~CJNiuzwbrk101dEkm2MFvNEPQ3GCzc2pPKBKD-zC4UWoJSvURUh3nXtyqBJPQiHPiH3fSV9y-s10Ka62usIp20zz3nTFB1Q28PhjPwfLjZ1Zuxxip4xecss0T8jgS3GMZswJcXBwy8hkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="cushions"
              />
              <button type="button">Cushions</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/eeb7/1414/a9c8387e76ef5aad4df19e57d8a2c463?Expires=1646006400&Signature=emeQXHp6R4XG0ACkaYCvbRXki842iFF5WjRJ4BP8mNmVXHL9XH~lY0ijV00y2z9JYbI5Ip07lY6PcibP19ZOe3BBp7-tfbQcRiym~ZspsAw~3Lpf9L~E~cFT4az4CjaKbup9F4~dGT16TkmUwGeJ3XZ6m5gKD~6UqJBs8L7FcpGw9FpR1SX6EO7sivG~eyN5fIUpunqiE7av9gdOHb~-H899vtMqF7aOh3uVwzehqrB1TOsidroD6tOKdZYZUaaDQhrRxVSNMJ4KgnYMoQ4o3Q6h4Ulsqno21kFYTOuOsqZe4XjhYJ8idG17dSuZn6JD-B8Ulp6kELL5CUEoslz7fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="upolstery"
              />
              <button type="button">Upholstery</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>Clothing</h2>

          <Wrapper>
            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/5c92/6cb0/24e2584b362c34394b7c2fe398823626?Expires=1646006400&Signature=JXNihuuCHIY18avsXMTXym1fT6qq56ZCrLVUmRcigUj5J7H9bp7OTS3~luYfMPvEpuyzCVc5qkh6g5BpGoF8XkBcAjUxjswwKTrZFDyqqtIAvMNX8n9DvTHnl1Y5Grq1xciuUJxD5xt6NE4flJ7wnuO0l6nHk7G39QeRDH5cNt-gJdz-LXpOa353z8nYvqjMnMO45fVO11LMvG3pYDhjCWLJENCZDH6Vc1DiKDrSN~dv4Q2K8SGGLk5ny9XVA73aHAzD0WaOzVnmf6h2gxu1fa0yq-FNyrwBH9KUbKlrycpxBmhW2J87do6EkszFGUxd9kzchfsxwl~-2mSPRD0j-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="clothes"
              />
              <button type="button">Clothes</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/8df2/5d9a/86135fa83e826fcd0e11f4dab8ace8c6?Expires=1646006400&Signature=X1A0kW73uLYi9j-mW9zjsjA7FyJNBxwEjZV5qdxVjowt6MCTKKpc3KyYc9RD9gaIwskxhEsMJQ1Q84OWgwSSmxnKaONFLPF-0-t1MlE24MoDo3f3Qq7JZBWACsxr7iTFQn~WkODI0wCceW2YKMzOe0ZESQBSqVh6FtRspBx-OdgZQPATAzUHDGZJGvSaH3JGSyrXianyKSO0CW4RZAxQj7gQkaEw3JDq5-zGkQhgn-8krolwg0FJfkiHmW2lAigXaoGKeYHBQQTxH3JADq-dLMc7mILIh3HevcLikqPwPC8LIDaHJCBAdJtN4vIvAs1C5vr0HxuDCFvNak6S5s6l5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="shoes"
              />
              <button type="button">Shoes</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/79ab/4628/1985e48cbd458e8c7399401bdd232697?Expires=1646006400&Signature=fnkg355muw43KKQwpF0HCf5kHjK4BJ0vqLIykUxEweh~kocIaGRksSX94sjkTicnSJWtfM6a9~Eybte~Vsv7zjavQSN56TsFKD-Tov4F9wHjAWFWP4vPmz2da78W4RBGVprOipP00Yj2sVuGSe~z~uiSCP~LH6ifHhN6rer6oRav7KNIXVddSzdASuvYuPIh8rPwsvV21dqjYLQ8SXI3285KicwIAEVMGBMJ2VifkaBxj0~QJaL8ALKPMdXSouTwFhZpWYxcmxAuXFtvTkhNUMZ6Bo2SjnapoR4117UWMy~xzVd7cvpKjqy6rD9nhhjZXuX-4pLBkRL3N0efyMbSOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="bags"
              />
              <button type="button">Bags</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>Decoration House</h2>

          <Wrapper>
            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/ad64/ad99/bfb6daf936e8ae6e29398fe599b5c097?Expires=1646006400&Signature=UwzlPaYAZY-6XW~qPvVkzgquwjmwOuOFNuKrSYN823ofAuh7dxrqCBwxydYRpFh6cpe9Mv74vyuffZJbMOmkCFQ~FidpT7B-XjzOvJNQ0SqGZVjwNNohmt-PmiTbrG8ZiVSp8vch1pOkzv-Lr-USVKAJgI-6ClvVHzHZI-5TTicUOTGqaKS7SgmnoqdqsmKadIs0sSvEMszNPtmXXsXmnVhn5MjvKLGcu4N2Mmbt0AqggITiwI~zvqEm4RIxxw2OSGmzzMj4iYD5pYmBFeTcEtzAr75bM9X4-sl46oNoCUYZAvazxqO6T9keWUD8RmZJtf12DqLQuoERk6ELYckmoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="furniture"
              />
              <button type="button">Furniture</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/add0/0cfb/bdd050a72c7f2b83c1936e7c56d198b9?Expires=1646006400&Signature=APc9xDsptplz71uSDE583zWfWIS~zEVFrzMUO~Vi07oIeXA82BqljakUFH97dynRjohOBAXU24zaJw1uzz-O0DKS1o1F6s4g6PH6m11b4L5nq8RaEojzsDV5XvCFieDNztKhvajT4R7vEAnw5VAivXxTAudU2k3QPPiHTKoKCNvgLDRzYfd56I6WKb9AMGcFahP30tMGUdEru1cr8fkARq1Bv~sMdT~~GwuypR03TQbvBm3ohdp94ZIK-52McnRW78ftEUzrsR8a1ZbCqHZaSEV6GocMnLbTu5xArKxC9cg1iCglkYqsFxlHSqOKHArdpQQbWiNOD2tjnsPzm6ctlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="rugs "
              />
              <button type="button">Rugs</button>
            </Link>

            <Link to="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/34ae/8d74/eac1a2d05cd12af20a1b07a635b1ae44?Expires=1646006400&Signature=RPd0jHeYp1fEaP-ve2c62aMoDhLD2ETf0sUrpVf~QNYzJP77KQshuFGGL7jpqw2XT3-3KXjqZm7qQlis2ERu4yZ6sxjo6RY4jBkXxbMO9NAXtdgZ13R-Z5DcTMpZPUk9lD76JZibYidvhTd~zF63KI7mU06IW3EKebgLHi~yXwkSLViI66yWmDehfWep9spW982-v3dahQIesLqN2Q3jSzLytDrFVRkawXpwcC6xAa5bu3GK0CpucpPf2XtLl7valr43ED8utwNsuOyiP5fmjcQRRRH2aBo-Rgxwzt2b0aM8Hehnkjfpvxkm1QP9PU3IES4myV~lX~ISiEvLGr5SrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="curtains"
              />
              <button type="button">Curtains</button>
            </Link>
          </Wrapper>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Bargains;
