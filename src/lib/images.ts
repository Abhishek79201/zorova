const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroAthlete: {
    src: unsplash("1571902943202-507ec2618e8f", 1600),
    alt: "Athlete running on an outdoor track at sunrise",
  },
  lifeStageChildren: {
    src: unsplash("1503676260728-1c00da094a0b", 1200),
    alt: "A child smiling while doing a simple stretch",
  },
  lifeStageYouth: {
    src: unsplash("1518310383802-640c2de311b2", 1200),
    alt: "Young adult training outdoors",
  },
  lifeStageProfessional: {
    src: unsplash("1573496359142-b8d87734a5a2", 1200),
    alt: "A focused professional at work",
  },
  lifeStageWomen: {
    src: unsplash("1544367567-0f2fcb009e0b", 1200),
    alt: "A woman in a calm, empowered pose",
  },
  lifeStageSeniors: {
    src: unsplash("1520975916090-3105956dac38", 1200),
    alt: "An active senior in a calm daylight setting",
  },
  sportsHero: {
    src: unsplash("1552674605-db6ffd4facb5", 1800),
    alt: "Athletes training together at high intensity",
  },
  sportsRecovery: {
    src: unsplash("1518611012118-696072aa579a", 1600),
    alt: "Athlete recovery and strength training in a gym",
  },
  careersWomen: {
    src: unsplash("1573497019940-1c28c88b4f3e", 1800),
    alt: "Confident woman professional",
  },
  careersTeam: {
    src: unsplash("1600880292203-757bb62b4baf", 1200),
    alt: "Professional colleague smiling at work",
  },
  businessTeam: {
    src: unsplash("1556761175-4b46a572b786", 1400),
    alt: "Team collaborating in a calm workspace",
  },
} as const;
