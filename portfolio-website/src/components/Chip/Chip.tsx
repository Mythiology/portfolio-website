import { Chip as BaseChip, ChipProps as BaseChipProps, SxProps, Theme } from '@mui/material';

interface ChipProps extends BaseChipProps {
  sx?: SxProps<Theme>;
}

export const Chip = ({ sx, ...props }: ChipProps) => {
  return (
    <BaseChip
      // TODO: Centralize the color theme such that MUI components can use the tailwind custom color as well.
      sx={{
        color: '#e5e5e5',
        backgroundColor: '#949494',
        ...sx,
      }}
      {...props}
    />
  );
};

export default Chip;
