import React from 'react';
import { Card, Grid, Row, Text } from "@nextui-org/react";

export const GifGridItem = ({ title, url }) => {

    return (
           
        <Grid xs={6} sm={3}>
          <Card hoverable clickable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={url}
                width="100%"
                height={250}
                alt={title}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <Text b>{title}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>

    )
}
