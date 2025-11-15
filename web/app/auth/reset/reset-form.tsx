import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function ResetForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>New Password</CardTitle>
          <CardDescription>
            Enter your new password and confirm it to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='password'>Password</FieldLabel>
                <Input id='password' type='password' required />
              </Field>

              <Field>
                <FieldLabel htmlFor='password'>Confirm Password</FieldLabel>
                <Input id='confirm-password' type='password' required />
              </Field>

              <Field>
                <Button type='submit'>Reset Password</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
