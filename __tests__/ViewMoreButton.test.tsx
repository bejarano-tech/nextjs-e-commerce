import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ViewMoreButton } from '../components/ViewMoreButton';

afterEach(cleanup);

describe('ViewMoreButton', () => {
  it('renders the button with "VER MÁS" text when not loading', () => {
    render(<ViewMoreButton onClick={vi.fn()} loading={false} />);
    expect(screen.getByText('VER MÁS')).toBeDefined();
  });

  it('renders the button with "CARGANDO" text when loading', () => {
    render(<ViewMoreButton onClick={vi.fn()} loading={true} />);
    expect(screen.getByText('CARGANDO')).toBeDefined();
  });

  it('calls onClick when the button is clicked and not loading', () => {
    const handleClick = vi.fn();
    render(<ViewMoreButton onClick={handleClick} loading={false} />);
    fireEvent.click(screen.getByText('VER MÁS'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call onClick when the button is clicked and loading', () => {
    const handleClick = vi.fn();
    render(<ViewMoreButton onClick={handleClick} loading={true} />);
    fireEvent.click(screen.getByText('CARGANDO'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('button is disabled when loading', () => {
    render(<ViewMoreButton onClick={vi.fn()} loading={true} />);
    expect(screen.getByText('CARGANDO')).toHaveProperty('disabled', true);
  });

  it('button is enabled when not loading', () => {
    render(<ViewMoreButton onClick={vi.fn()} loading={false} />);
    expect(screen.getByText('VER MÁS')).toHaveProperty('disabled', false);
  });
});
