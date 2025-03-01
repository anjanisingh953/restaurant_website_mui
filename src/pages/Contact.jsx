import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Call, Mail, SupportAgent } from '@mui/icons-material'

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                my: 5,
                ml: 10,
                "& h4": {
                    fontWeight: "bold",
                    mb: 2
                },
                "& p": {
                    pr: 8,
                    textAlign: 'justify'
                }
            }}>
                <Typography variant="h4">Contact My Restaurant</Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt suscipit maxime voluptates, totam incidunt quis dicta. Amet at expedita atque, maxime repudiandae inventore. Est illum illo delectus quo, veniam ullam, eos at sapiente harum nostrum, repudiandae explicabo. Eveniet placeat blanditiis reprehenderit deleniti. Consequuntur expedita vero quod aspernatur excepturi maxime porro modi voluptatem veniam! Modi deserunt iste deleniti qui id sint vero distinctio nobis vel doloribus, ut laboriosam accusantium sequi neque iusto adipisci eaque voluptatibus, veritatis impedit quod dolorem enim at. Nulla ut laborum ab delectus? Laudantium tempore modi quae magnam animi, pariatur quaerat assumenda voluptatem facere facilis quasi dolore?</p>
            </Box>

            <Box sx={{ m: 3, width: "600px", ml: "80px", "@media (max-width:600px)": { width: "300px" } }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact-table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "#000", color: "#fff", textAlign: "center" }}>Contact Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgent sx={{ pt: 1, color: 'red' }} /> 18001235(tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Mail sx={{ pt: 1, color: 'blue' }} /> helpdesk123@help.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Call sx={{ pt: 1, color: 'green' }} /> 124528247                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact
