import { Box, ImageList, ImageListItem } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const HomePageImageList = () => {
    return (
        <ImageList
            sx={{ width: 950, height: 750 }}
            variant="quilted"
            cols={2}
            rowHeight={300}
        >
            <Box>
                <ImageListItem cols={1} rows={1}>
                    <img
                        {...srcset("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/09134330-7af0-4f20-8a3f-30efa6729b3f/ja-1-day-basketball-shoes-bCx2W3.png", 300)}
                        alt='img'
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem cols={1} rows={1}>
                    <img
                        {...srcset("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0ddf973d-e905-4362-8a2b-040e862bd273/lebron-xxi-basketball-shoes-DjB9tK.png", 300)}
                        alt='img'
                        loading="lazy"
                    />
                </ImageListItem>
            </Box>
            <ImageListItem cols={1} rows={2}>
                <img
                    {...srcset("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9cc63a5-a59c-4365-9898-46a779368e1a/kd17-basketball-shoes-Vw01bx.png", 300, 1, 2)}
                    alt='img'
                    loading="lazy"
                />
            </ImageListItem>
        </ImageList>
    );
}
