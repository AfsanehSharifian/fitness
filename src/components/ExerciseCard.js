import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const { id, name, gifUrl, bodyPart, target } = exercise;

  return (
    <Link className="exercise-card" to={`/exercise/${id}`}>
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: " #ffa9a9",
            fontSize: " 14px",
            borderRadius: " 20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: " #fcc757",
            fontSize: " 14px",
            borderRadius: " 20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
