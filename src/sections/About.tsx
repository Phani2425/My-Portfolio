import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import TypeScript from "@/assets/icons/typescript-svgrepo-com.svg"
import TechIcon from "@/components/TechIcon";

const toolboxItems = [
  { title: "TypeScript", 
    iconType: TypeScript ,
  },
  { title: "React", 
    iconType: TypeScript ,
  },
  { title: "NextJs", 
    iconType: TypeScript ,
  },
  { title: "Express", 
    iconType: TypeScript ,
  },
  { title: "MongoDB", 
    iconType: TypeScript ,
  },
  { title: "PostgreSQL", 
    iconType: TypeScript ,
  },
  { title: "FireBase", 
    iconType: TypeScript ,
  },
  { title: "AWS", 
    iconType: TypeScript ,
  },
  { title: "C++", 
    iconType: TypeScript ,
  },
  { title: "Docker", 
    iconType: TypeScript ,
  },
];

export const AboutSection = () => {
  return (
    <div className="">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />

      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="book" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My TechStack</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {
              toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))
            }
          </div>
        </Card>

        <Card>
        <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>
              Explore my hobbies, interests, and the things that make me tick.
            </p>
          </div>
        </Card>
        
      </div>
    </div>
  );
};
