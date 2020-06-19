import PropTypes from 'prop-types';
import { Anchor, Box, Menu as GrMenu, Text } from 'grommet';
import { Link } from 'react-scroll';
import { sections } from '../config/content';

const Menu = ({ setActiveSection, activeSection, large, ...otherProps }) => {
  return (
    <Box
      width={!large ? '100%' : 'small '}
      background={large ? 'none' : 'white'}
      style={{
        position: 'fixed',
        zIndex: 10,
        top: !large && 0,
        left: !large && 0,
      }}
    >
      {large ? (
        sections.map((s, i) => {
          const isActive = s.title === activeSection;
          return (
            <Link
              key={s.title}
              href={`#${s.title}`}
              activeClass="menuitem-active"
              className="menuitem"
              to={s.title}
              spy
              hashSpy
              smooth
              // offset={-150}
              duration={500}
              onSetActive={(section) => setActiveSection(section)}
              style={{
                textDecoration: 'none',
                paddingTop: 6,
                paddingBottom: 6,
              }}
            >
              <Anchor
                color={isActive ? 'brand' : 'dark-3'}
                as="span"
                // size="large"
                style={{ fontWeight: '500' }}
              >
                {s.title}
              </Anchor>
            </Link>
          );
        })
      ) : (
        <Box pad="xsmall" width="100%">
          <GrMenu
            alignSelf="center"
            tabIndex="0"
            label={<Text size="large">Features</Text>}
            items={sections.map((s) => ({
              label: s.title,
              href: `#${s.title}`,
              size: 'large',
            }))}
          />
        </Box>
      )}
    </Box>
  );
};

Menu.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  large: PropTypes.bool.isRequired,
};

export default Menu;