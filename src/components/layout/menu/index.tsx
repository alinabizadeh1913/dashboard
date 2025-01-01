import Typography from "../components/typography";
import Section from "../section";

const Menu = () => {
  return (
    <>
      <Section>
        <div className="flex justify-between">
          <div>
            <Typography className="text-[30px] text-white">
              Dashboard
            </Typography>
            <Typography className="text-[13px] text-primary">
              With all of the styling tool options available in today's market
            </Typography>
          </div>
          <div className="flex items-center gap-x-[25px]">
            <div className="text-white cursor-pointer">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14.5"
                  cy="14.5"
                  r="9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 22L25.7929 26.7929"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-white cursor-pointer">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM6 16C6 14.8954 6.89543 14 8 14C9.10457 14 10 14.8954 10 16C10 17.1046 9.10457 18 8 18C6.89543 18 6 17.1046 6 16ZM16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6ZM14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16ZM24 6C22.8954 6 22 6.89543 22 8C22 9.10457 22.8954 10 24 10C25.1046 10 26 9.10457 26 8C26 6.89543 25.1046 6 24 6ZM22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16ZM8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22ZM14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24ZM24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="button-primary w-[48px] h-[28px] rounded-full flex justify-center items-center">
              <div className="text-white flex items-center gap-x-[5px]">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0C3.92954 0 2.98173 0.691642 2.65518 1.71108L0 10H10L7.34482 1.71108C7.01827 0.691641 6.07046 0 5 0ZM3.5 11C3.22386 11 3 11.2239 3 11.5C3 11.7761 3.22386 12 3.5 12H6.5C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11H3.5Z"
                    fill="currentColor"
                  />
                </svg>
                <Typography className="text-white">15</Typography>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Menu;
