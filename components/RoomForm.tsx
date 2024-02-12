"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { RoomAISchema } from '@/schemas/schemas'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

type RoomInput = z.infer<typeof RoomAISchema>;

const RoomFormPage = () => {

    const form = useForm<RoomInput>({
        resolver: zodResolver(RoomAISchema),
        defaultValues: {
            room: "",
            style: "",
            materials: "",
            aspect_ratio: "",
        }
    });

    const onSubmit = async (values: RoomInput) => {

        console.log(values);

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='room'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Room
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Room' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='style'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Style
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Style' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='materials'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Style
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='materials' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                {/* <FormField
                    name='prompt' 
                /> */}
                <FormField
                    control={form.control}
                    name='aspect_ratio'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Aspect Ratio
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Aspect Ratio' {...field} />
                            </FormControl>
                        </FormItem>
                    )}

                />
                <Button type='submit'>
                    Generate Images
                </Button>
            </form>
        </Form>
    )
}

export default RoomFormPage