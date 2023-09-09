import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  console.log(animations);
  const newAnList = animations.slice(0, 3);
  const mkList = newAnList.slice(1, 3);
  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      <Stack>
        {mkList.map((animation, i) => (
          <Button
            key={animation}
            variant={i === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(i)}
          >
            {/* {animation} */}
            {i === 0 ? "Waiting" : "Sprinting"}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;
