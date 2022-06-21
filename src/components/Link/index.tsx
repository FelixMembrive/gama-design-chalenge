type LinkProps = {
    text: string
    redirect: string
  }

export default function Link (props: LinkProps){
    return (
        <>
        <a href={props.redirect}>{props.text}</a>
        </>
    )
}