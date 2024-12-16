import { forwardRef, MouseEvent } from 'react';
import { Button as ButtonBase, ButtonProps, SxProps, Theme } from '@mui/material';

interface ButtonBaseProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ onClick, sx, href, children, ...props }, ref) => {
    return (
      <ButtonBase
        onClick={onClick}
        className=''
        ref={ref}
        href={href}
        variant='outlined'
        sx={{
          border: 'none',
          color: '#e5e5e5',
          textTransform: 'capitalize',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '4px',
          padding: '8px 10px 8px 10px',
          '&:hover': {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          },
          '&:focus': {
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          },
          ...sx,
        }}
        {...props}
        disableRipple={true}
      >
        <div>{children}</div>
      </ButtonBase>
    );
  },
);

Button.displayName = 'Button';
