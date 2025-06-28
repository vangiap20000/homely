import { Link } from "react-router-dom";
import { getImageUrlGlobal } from "../../../utils/getAssets";

const BlogDetail = () => {
  const blogContent = `<p style="--tw-leading:1.2;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:18px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.2;margin:0px 0px 32px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    Whether you’re relocating, facing financial challenges, or simply eager to move on, these tips will help you sell your property quickly
</p>
<h3 style="--tw-leading:40px;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:24px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;line-height:40px;margin:0px 0px 24px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    1. Price It Right
</h3>
<ul style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(0, 0, 0);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin-bottom:40px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Competitive Pricing: Research recent sales in your area to determine a fair and competitive price
        </p>
    </li>
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Strategic Pricing: Slightly underpricing your home can attract more buyers and lead to bidding wars
        </p>
    </li>
    <li style="--tw-leading:1.2;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Consider Market Trends: Consult a real estate agent for insights on pricing in your current market
        </p>
    </li>
</ul>
<h3 style="--tw-leading:40px;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:24px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;line-height:40px;margin:0px 0px 24px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    2. Enhance Curb Appeal
</h3>
<p style="--tw-leading:1.2;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:18px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.2;margin:0px 0px 32px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    First impressions matter. Make sure your property looks inviting and well-maintained.
</p>
<ul style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(0, 0, 0);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin-bottom:40px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Landscaping: Trim bushes, mow the lawn, and plant flowers.
        </p>
    </li>
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Exterior Cleaning: Power wash the siding and clean windows.
        </p>
    </li>
    <li style="--tw-leading:1.2;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Fresh Paint: A new coat of paint on the front door or exterior can make a big impact.
        </p>
    </li>
</ul>
<h3 style="--tw-leading:40px;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:24px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;line-height:40px;margin:0px 0px 24px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    3. Stage Your Home
</h3>
<p style="--tw-leading:1.2;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:18px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.2;margin:0px 0px 32px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    Staging helps buyers envision themselves in your space
</p>
<ul style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(0, 0, 0);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin-bottom:40px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Declutter and Depersonalize: Remove personal items and excess furniture.
        </p>
    </li>
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Neutral Colors: Stick to neutral tones to appeal to a wider audience
        </p>
    </li>
    <li style="--tw-leading:1.2;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Highlight Key Features: Emphasize architectural details like fireplaces or large windows
        </p>
    </li>
</ul>
<h3 style="--tw-leading:40px;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:24px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;line-height:40px;margin:0px 0px 24px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    4. Market Effectively
</h3>
<p style="--tw-leading:1.2;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:18px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.2;margin:0px 0px 32px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    Reach potential buyers through a strong marketing plan
</p>
<ul style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(0, 0, 0);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin-bottom:40px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Professional Photography: High-quality images showcase your property in the best light
        </p>
    </li>
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Virtual Tours: Offer 3D walkthroughs for remote buyers.
        </p>
    </li>
    <li style="--tw-leading:1.2;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Social Media and Listings: Promote your property on popular real estate websites and social platforms
        </p>
    </li>
</ul>
<h3 style="--tw-leading:40px;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:24px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;line-height:40px;margin:0px 0px 24px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    5. Work with a Real Estate Agent
</h3>
<p style="--tw-leading:1.2;-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(23, 32, 35);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:18px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.2;margin:0px 0px 32px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    A skilled agent can help you navigate the selling process and negotiate the best price
</p>
<ul style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-style:solid;border-width:0px;box-sizing:border-box;color:rgb(0, 0, 0);font-family:&quot;Bricolage Grotesque&quot;, &quot;Bricolage Grotesque Fallback&quot;;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin-bottom:40px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Experience Matters: Choose an agent with a proven track record in your area
        </p>
    </li>
    <li style="--tw-leading:1.2;--tw-space-y-reverse:0;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-block:0px 12px;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Negotiation Skills: An experienced agent will handle offers and counteroffers effectively
        </p>
    </li>
    <li style="--tw-leading:1.2;border-style:solid;border-width:0px;box-sizing:border-box;font-size:16px;line-height:1.2;margin-bottom:0px;margin-right:0px;margin-top:0px;padding:0px 0px 0px 16px;position:relative;">
        <p style="margin-left:0px;">
            Market Insight: They’ll provide valuable advice on pricing, timing, and market conditions
        </p>
    </li>
</ul>
`;
  return (
    <>
      <section className="relative !pt-44 pb-0">
        <div className="container max-w-8xl mx-auto md:px-0 px-4">
          <div>
            <div>
              <Link
                className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300"
                to="/blogs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ph"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
                  ></path>
                </svg>
                <span>Go Back</span>
              </Link>
              <h2 className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7">
                Boost home value
              </h2>
              <h6 className="text-xm mt-5 text-dark dark:text-white">
                Once you own your home, consider making improvements to increase
                its value over time
              </h6>
            </div>
            <div className="flex items-center justify-between gap-6 mt-12">
              <div className="flex items-center gap-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="bg-no-repeat bg-contain inline-block rounded-full !w-12 !h-12"
                  src={getImageUrlGlobal("testimonial/irfan.jpg")}
                  style={{ color: "transparent" }}
                />
                <div>
                  <span className="text-xm text-dark dark:text-white">
                    Mark Davian
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"
                    ></path>
                  </svg>
                  <span className="text-base text-dark font-medium dark:text-white">
                    Feb 09, 2025
                  </span>
                </div>
                <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
                  <p className="text-sm font-semibold text-dark dark:text-white">
                    Guides
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 mt-12 overflow-hidden rounded">
            <img
              alt="image"
              loading="lazy"
              width="1170"
              height="766"
              decoding="async"
              data-nimg="1"
              className="h-full w-full object-cover object-center rounded-3xl"
              src={getImageUrlGlobal("post/blog-1.jpg")}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="blog-details markdown xl:pr-10">
              <div dangerouslySetInnerHTML={{ __html: blogContent }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
