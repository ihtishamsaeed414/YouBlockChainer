import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const exoticLocations = [
  {
    name: 'LocationsHub',
    description: (
      <span>
        Provides a wide range of filming locations worldwide, including exotic
        settings.
      </span>
    ),
    website: 'https://www.locationshub.com/',
  },
  {
    name: 'The Location Guide',
    description: (
      <span>
        Offers a comprehensive directory of filming locations and production
        services worldwide, including exotic destinations.
      </span>
    ),
    website: 'https://www.thelocationguide.com/',
  },
  // ... add more exotic locations
];

function ExoticLocations() {
  return (
    <div className="exotic-locations">
      <h2>Exotic Filming Locations</h2>
      {exoticLocations.map((location) => (
        <Card key={location.name} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {location.description}
            </Typography>
            <Link href={location.website} target="_blank" underline="none">
              Visit Website
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ExoticLocations;
